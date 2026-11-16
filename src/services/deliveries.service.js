import deliveriesRepository from "../repositories/deliveries.repository.js";
import { DELIVERY_STATUS_VALUES } from "../constants/index.js";
import { InvalidIdError, InvalidStatusError, DeliveryNotFoundError } from "../errors/index.js";
import { isValidId } from "../utils/validators.js";

// El Service tiene la lógica de negocio: validaciones y reglas.
// No conoce Express (req/res) ni Mongoose: habla con el Repository.
// Cuando algo está mal, lanza un error del dominio (carpeta errors/); no responde nada él mismo.

// status (opcional): filtra las entregas por estado
export const getDeliveries = async (status) => {
  if (status !== undefined && !DELIVERY_STATUS_VALUES.includes(status)) {
    throw new InvalidStatusError(status, DELIVERY_STATUS_VALUES);
  }

  return await deliveriesRepository.getAll({ status });
};

export const getDeliveryById = async (id) => {
  if (!isValidId(id)) {
    throw new InvalidIdError("entrega");
  }

  const delivery = await deliveriesRepository.getById(id);
  if (!delivery) {
    throw new DeliveryNotFoundError();
  }
  return delivery;
};

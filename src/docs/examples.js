import { ERROR_CODES } from "../errors/index.js";
import { MOCK_LIMITS } from "../constants/index.js";
import { errorExample } from "./helpers.js";

// Ejemplos de error compartidos por varios endpoints (mensajes reales de la API).

export const invalidIdExample = (entity) =>
  errorExample(ERROR_CODES.INVALID_ID, `El id del ${entity} no es válido`);

export const invalidJsonExample = errorExample(ERROR_CODES.INVALID_JSON, "El body no es un JSON válido");

export const noFieldsToUpdateExample = (allowedFields) =>
  errorExample(
    ERROR_CODES.VALIDATION_ERROR,
    `No se enviaron campos para actualizar. Campos permitidos: ${allowedFields.join(", ")}`,
    { name: "NO_FIELDS_TO_UPDATE" }
  );

export const invalidStatusExample = (status, validStatuses) =>
  errorExample(
    ERROR_CODES.INVALID_STATUS,
    `El estado "${status}" no es válido. Valores permitidos: ${validStatuses.join(", ")}`
  );

export const invalidQuantityExample = errorExample(
  ERROR_CODES.INVALID_QUANTITY,
  `qty debe ser un número entero entre 1 y ${MOCK_LIMITS.MAX_QTY}`
);

export const negativeQuantityExample = errorExample(
  ERROR_CODES.NEGATIVE_QUANTITY,
  "La cantidad (qty) no puede ser negativa"
);

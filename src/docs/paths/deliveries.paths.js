import { DELIVERY_STATUS_VALUES } from "../../constants/index.js";
import { errorResponse, successResponse, idParameter, schemaRef, responseRef } from "../helpers.js";
import { invalidIdExample, invalidStatusExample } from "../examples.js";

const TAG = "Deliveries";

export const deliveriesPaths = {
  "/api/deliveries": {
    get: {
      tags: [TAG],
      summary: "Listar entregas",
      description:
        "Devuelve las entregas, las más nuevas primero. Se pueden filtrar por estado con `?status=`. Las entregas se pueden generar con `POST /api/mocks/seed?type=deliveries`.",
      operationId: "getDeliveries",
      parameters: [
        {
          name: "status",
          in: "query",
          required: false,
          description: "Devuelve solo las entregas con este estado",
          schema: { type: "string", enum: [...DELIVERY_STATUS_VALUES], example: "in_transit" }
        }
      ],
      responses: {
        200: successResponse("Lista de entregas", { type: "array", items: schemaRef("Delivery") }),
        400: errorResponse("El estado indicado no existe", invalidStatusExample("lost", DELIVERY_STATUS_VALUES)),
        500: responseRef("InternalError")
      }
    }
  },

  "/api/deliveries/{id}": {
    get: {
      tags: [TAG],
      summary: "Obtener una entrega por id",
      operationId: "getDeliveryById",
      parameters: [idParameter("entrega")],
      responses: {
        200: successResponse("La entrega", schemaRef("Delivery")),
        400: errorResponse("El id no tiene formato de MongoDB", invalidIdExample("entrega")),
        404: responseRef("DeliveryNotFound"),
        500: responseRef("InternalError")
      }
    }
  }
};

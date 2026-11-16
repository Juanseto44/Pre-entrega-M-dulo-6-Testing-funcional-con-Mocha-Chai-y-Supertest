import { AppError } from "./app.error.js";
import { ERROR_CODES } from "./error.dictionary.js";

// Errores del dominio de ShipNow. Cada clase representa un caso concreto,
// así el service lanza `new UserNotFoundError()` y se entiende solo qué pasó.

// ------------------------------------------------------------------
// Datos inválidos (400)
// ------------------------------------------------------------------

// details: lista de { field, message } con cada campo que falló
export class InvalidDataError extends AppError {
  constructor(message, details = []) {
    super(ERROR_CODES.VALIDATION_ERROR, message, { details });
  }
}

export class InvalidIdError extends AppError {
  constructor(entity) {
    super(ERROR_CODES.INVALID_ID, `El id del ${entity} no es válido`);
  }
}

// validStatuses (opcional): los estados permitidos, para que el mensaje los muestre
export class InvalidStatusError extends AppError {
  constructor(status, validStatuses = []) {
    const allowed = validStatuses.length > 0 ? `. Valores permitidos: ${validStatuses.join(", ")}` : "";
    super(ERROR_CODES.INVALID_STATUS, `El estado "${status}" no es válido${allowed}`);
  }
}

// ------------------------------------------------------------------
// No encontrado (404)
// ------------------------------------------------------------------

export class UserNotFoundError extends AppError {
  constructor() {
    super(ERROR_CODES.USER_NOT_FOUND);
  }
}

export class ProductNotFoundError extends AppError {
  constructor() {
    super(ERROR_CODES.PRODUCT_NOT_FOUND);
  }
}

export class OrderNotFoundError extends AppError {
  constructor() {
    super(ERROR_CODES.ORDER_NOT_FOUND);
  }
}

export class DeliveryNotFoundError extends AppError {
  constructor() {
    super(ERROR_CODES.DELIVERY_NOT_FOUND);
  }
}

export class RouteNotFoundError extends AppError {
  constructor(method, path) {
    super(ERROR_CODES.ROUTE_NOT_FOUND, `No se encontró la ruta ${method} ${path}`);
  }
}

// ------------------------------------------------------------------
// Conflictos (409)
// ------------------------------------------------------------------

export class EmailAlreadyRegisteredError extends AppError {
  constructor() {
    super(ERROR_CODES.EMAIL_ALREADY_REGISTERED);
  }
}

// ------------------------------------------------------------------
// Mocks
// ------------------------------------------------------------------

export class InvalidQuantityError extends AppError {
  constructor(maxQty) {
    super(ERROR_CODES.INVALID_QUANTITY, `qty debe ser un número entero entre 1 y ${maxQty}`);
  }
}

export class NegativeQuantityError extends AppError {
  constructor() {
    super(ERROR_CODES.NEGATIVE_QUANTITY);
  }
}

export class InvalidMockTypeError extends AppError {
  constructor(validTypes) {
    super(ERROR_CODES.INVALID_MOCK_TYPE, `type debe ser uno de: ${validTypes.join(", ")}`);
  }
}

// Falta cargar algo antes (ej: pedidos sin usuarios cargados)
export class MockPrerequisiteError extends AppError {
  constructor(message) {
    super(ERROR_CODES.MOCK_PREREQUISITE_MISSING, message);
  }
}

// Falló la generación de los datos (cause: el error original)
export class MockGenerationError extends AppError {
  constructor(cause) {
    super(ERROR_CODES.MOCK_GENERATION_FAILED, undefined, { cause });
  }
}

// Falló la carga en MongoDB (cause: el error original de la base)
export class MockInsertError extends AppError {
  constructor(type, cause) {
    super(
      ERROR_CODES.MOCK_INSERT_FAILED,
      `No se pudieron guardar los datos de prueba (type=${type}) en MongoDB`,
      { cause }
    );
  }
}

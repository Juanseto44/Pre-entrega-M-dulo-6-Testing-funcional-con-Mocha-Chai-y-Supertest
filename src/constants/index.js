// Valores fijos del dominio de ShipNow.
// Object.freeze evita que alguien los modifique por error mientras corre la app.
// Se usan en lugar de escribir strings sueltos ("admin", "available") por todo el código.

export const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  USER: "user", // cliente: el que hace pedidos
  COURIER: "courier" // repartidor: el que realiza las entregas
});

export const PRODUCT_STATUS = Object.freeze({
  AVAILABLE: "available",
  OUT_OF_STOCK: "out_of_stock"
});

export const ORDER_STATUS = Object.freeze({
  PENDING: "pending",
  IN_TRANSIT: "in_transit",
  DELIVERED: "delivered",
  CANCELLED: "cancelled"
});

export const ORDER_PRIORITY = Object.freeze({
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high"
});

export const DELIVERY_STATUS = Object.freeze({
  PENDING: "pending", // todavía sin repartidor asignado
  IN_TRANSIT: "in_transit",
  DELIVERED: "delivered"
});

// Qué estado de entrega le corresponde a cada estado de pedido.
// Un pedido cancelado no aparece acá: no tiene entrega.
export const DELIVERY_STATUS_BY_ORDER_STATUS = Object.freeze({
  [ORDER_STATUS.PENDING]: DELIVERY_STATUS.PENDING,
  [ORDER_STATUS.IN_TRANSIT]: DELIVERY_STATUS.IN_TRANSIT,
  [ORDER_STATUS.DELIVERED]: DELIVERY_STATUS.DELIVERED
});

// Límites del parámetro qty de los endpoints de mocks
export const MOCK_LIMITS = Object.freeze({
  DEFAULT_QTY: 10,
  MAX_QTY: 100 // tope para que la carga de datos sea controlada
});

// Entornos de ejecución (variable NODE_ENV)
export const ENVIRONMENTS = Object.freeze({
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  TEST: "test"
});

// Qué se puede generar con los endpoints de mocks (POST /api/mocks/seed?type=...)
export const MOCK_TYPES = Object.freeze({
  USERS: "users",
  COURIERS: "couriers",
  ORDERS: "orders",
  DELIVERIES: "deliveries"
});

// Listas de valores permitidos (las usan los modelos para el enum y los services para validar)
export const USER_ROLE_VALUES = Object.freeze(Object.values(USER_ROLES));
export const PRODUCT_STATUS_VALUES = Object.freeze(Object.values(PRODUCT_STATUS));
export const ORDER_STATUS_VALUES = Object.freeze(Object.values(ORDER_STATUS));
export const ORDER_PRIORITY_VALUES = Object.freeze(Object.values(ORDER_PRIORITY));
export const DELIVERY_STATUS_VALUES = Object.freeze(Object.values(DELIVERY_STATUS));
export const MOCK_TYPE_VALUES = Object.freeze(Object.values(MOCK_TYPES));
export const ENVIRONMENT_VALUES = Object.freeze(Object.values(ENVIRONMENTS));

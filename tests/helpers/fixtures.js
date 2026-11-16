import User from "../../src/models/User.js";
import Order from "../../src/models/Order.js";

// Datos de prueba CONTROLADOS: se crean dentro de cada test, nunca se cargan a mano.
// Se guardan directo con los modelos (no con la API) para que preparar los datos
// no dependa del endpoint que se está probando.

let counter = 0;

// Datos válidos de usuario, con email único en cada llamada
export const buildUserData = (overrides = {}) => {
  counter += 1;
  return {
    first_name: "Ana",
    last_name: "Tester",
    email: `ana.tester${counter}.${Date.now()}@test.com`,
    role: "user",
    ...overrides
  };
};

// Datos válidos para crear un pedido por la API (POST /api/orders)
export const buildOrderData = (userId, overrides = {}) => ({
  user: userId,
  items: [{ description: "Caja de libros", quantity: 2, weight: 3.5 }],
  originAddress: "Av. Corrientes 1234, Buenos Aires",
  destinationAddress: "San Martín 567, Rosario",
  ...overrides
});

// Los ids se devuelven como string, igual que en las respuestas JSON
const toPlain = (document) => {
  const plain = document.toObject({ versionKey: false });
  return { ...plain, _id: String(plain._id), ...(plain.user && { user: String(plain.user) }) };
};

export const createUser = async (overrides) => toPlain(await User.create(buildUserData(overrides)));

export const createOrder = async (userId, overrides) =>
  toPlain(await Order.create(buildOrderData(userId, overrides)));

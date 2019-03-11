const db = require("../db");

const create = async newCustomer => {
  const [id] = await db("customers").insert(newCustomer, "id");
  const createdCustomer = await db("customers")
    .where({ id })
    .first();
  return createdCustomer;
};

const getAll = () => {
  return db.select("id", "username").from("customers");
};

const getOne = async filter => {
  const foundCustomer = await db("customers")
    .where(filter)
    .first();
  if (!foundCustomer) return null;
  return foundCustomer;
};

module.exports = {
  create,
  getAll,
  getOne
};

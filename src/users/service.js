const DB = require("../db");

const COLLECTION = "users";

function getOne(id) {
  return DB.getOne(COLLECTION, id);
}

function getList() {
  return DB.getList(COLLECTION);
}

function createOne(user) {
  return DB.createOne(COLLECTION, user);
}

function updateOne(id, data) {
  return DB.updateOne(COLLECTION, id, data);
}

function deleteOne(id) {
  return DB.deleteOne(COLLECTION, id);
}

module.exports = {
  getOne,
  getList,
  createOne,
  updateOne,
  deleteOne,
};

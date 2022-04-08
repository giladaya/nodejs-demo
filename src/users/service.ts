const DB = require("../db");

const COLLECTION = "users";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

type UserData = Omit<User, "id">;

function getOne(id: number) {
  return DB.getOne(COLLECTION, id);
}

function getList() {
  return DB.getList(COLLECTION);
}

function createOne(user: User) {
  return DB.createOne(COLLECTION, user);
}

function updateOne(id: number, data: UserData) {
  return DB.updateOne(COLLECTION, id, data);
}

function deleteOne(id: number) {
  return DB.deleteOne(COLLECTION, id);
}

module.exports = {
  getOne,
  getList,
  createOne,
  updateOne,
  deleteOne,
};

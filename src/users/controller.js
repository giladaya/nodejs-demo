const express = require("express");
const usersService = require("./service")

const router = express.Router();

router.get("/:id", function (req, res) {
  const rawId = req.params.id;
  if (!rawId) {
    return res.status(400).send({
      message: "Missing id parameter",
    });
  }
  const parsedId = parseInt(rawId);
  if (isNaN(parsedId)) {
    return res.status(400).send({
      message: "Id parameter must be valid integer",
    });
  }

  const item = usersService.getOne(parsedId);

  if (item) {
    res.json(item);
  }

  return res.status(404).send({
    message: `Item with id not found`,
  });
});

router.get("/", function (req, res) {
  const items = usersService.getList();
  res.json(items);
});

router.post("/", function (req, res) {
  // TODO: validate req.body.data

  const newItem = usersService.createOne(req.body.data);
  res.json(newItem);
});

router.put("/:id", function (req, res) {
  const rawId = req.params.id;
  if (!rawId) {
    return res.status(400).send({
      message: "Missing id parameter",
    });
  }
  const parsedId = parseInt(rawId);
  if (isNaN(parsedId)) {
    return res.status(400).send({
      message: "Id parameter must be valid integer",
    });
  }

  // TODO: validate req.body.data

  const item = usersService.updateOne(parsedId, req.body.data);
  if (item) {
    res.json(item);
  }

  return res.status(404).send({
    message: "Item with id not found",
  });
});

router.delete("/:id", function (req, res) {
  const rawId = req.params.id;
  if (!rawId) {
    return res.status(400).send({
      message: "Missing id parameter",
    });
  }
  const parsedId = parseInt(rawId);
  if (isNaN(parsedId)) {
    return res.status(400).send({
      message: "Id parameter must be valid integer",
    });
  }

  usersService.deleteOne(parsedId);
  res.json({ deleted: true });
});

module.exports = router;

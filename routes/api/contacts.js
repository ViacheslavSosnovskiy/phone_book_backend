const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");
const schemas = require("../../models/contact");
const { authenticate, isValidId, validateBody } = require("../../middlewares");

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.schemaContacts), ctrl.addContact);

router.put("/:id", authenticate, isValidId, validateBody(schemas.schemaContacts), ctrl.updateContact);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
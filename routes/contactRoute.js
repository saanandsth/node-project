const express = require("express")
const router = express.Router()
const {getContacts, createContact, getContact, deleteContact, updateContact} = require("../controllers/contactController")

// getting all contacts
router.route("/").get(getContacts)

// create contact op
router.route("/").post(createContact)

// for getting perticular contact op
router.route("/:id").get(getContact)

// for update contact op
router.route("/:id").put(updateContact)

// for delete contact op
router.route("/:id").delete(deleteContact)

module.exports = router
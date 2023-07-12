const asyncHandler = require("express-async-handler")
//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res)=>{
  res.status(200).json({ message : "Get all contacts"})
});


//@desc Create New Contact
//@route POST /api/contacts
const createContact = asyncHandler(async (req, res)=>{
  const {name,email,phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error('All fields are mandatory!')
  }
  res.status(201).json({ message : "Create all contacts"})
})

//@desc Get Contact by id
//@route GET /api/contacts/:id
const getContact = asyncHandler(async (req, res)=>{
  res.status(200).json({ message : `Get contact for ${req.params.id}`})
})

//@desc Update New Contact
//@route PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res)=>{
  res.status(200).json({ message : `Update contact for ${req.params.id}`})
})

//@desc Delete Contact
//route DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req, res)=>{
  res.status(200).json({ message : `Delete contact for ${req.params.id}`})
})

module.exports = {getContacts,createContact,getContact, updateContact, deleteContact}
const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res)=>{
  const contacts = await Contact.find();
  res.status(200).json(contacts)
});


//@desc Create New Contact
//@route POST /api/contacts
const createContact = asyncHandler(async (req, res)=>{
  const {name,email,phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error('All fields are mandatory!')
  }
  const contact = await Contact.create({
    name,
    email,
    phone
  })
  res.status(201).json(contact)
})

//@desc Get Contact by id
//@route GET /api/contacts/:id
const getContact = asyncHandler(async (req, res)=>{
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found")
  }
  res.status(200).json(contact)
})

//@desc Update New Contact
//@route PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res)=>{
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found For Updation")
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
  );
  res.status(200).json(updatedContact)
})

//@desc Delete Contact
//route DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req, res)=>{
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found")
  }
  await Contact.deleteContact()
  res.status(200).json(contact)
})

module.exports = {getContacts,createContact,getContact, updateContact, deleteContact}
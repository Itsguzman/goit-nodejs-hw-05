import { Contact } from "../models/contactSchema.js";
import { favoriteValidation } from "../validation.js";

const getAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const selectContact = Contact.findById(contactId);

    if (!selectContact) {
      res.status(400).json({ message: "Contact not found" });
    }
    return selectContact;
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  // const { name, email, phone } = req.body;/req.body
  const { error } = contactValidation.validate(req.body);

  if (error) {
    res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await Contact.findByIdAndDelete(contactId);

    if (!result) {
      res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const result = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body
    );
    if (!result) {
      res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateStatusContact = async (req, res) => {
  const { error } = favoriteValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ message: "Missing field favorite" });
  }
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      favorite: true,
    });

    if (!result) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};

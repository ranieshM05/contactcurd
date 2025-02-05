import React, { useState, useEffect } from "react";
import { addContact, updateContact } from "../services/api";

const ContactForm = ({ contact, onSuccess }) => {
  const [formData, setFormData] = useState(contact || { name: "", email: "", phone: "", address: "" });

  useEffect(() => {
    if (contact) {
      setFormData(contact); 
    }
  }, [contact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    contact ? await updateContact(contact._id, formData) : await addContact(formData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />
      <button type="submit">{contact ? "Update" : "Add"} Contact</button>
    </form>
  );
};

export default ContactForm;

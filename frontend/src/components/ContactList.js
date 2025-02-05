import React, { useState, useEffect } from "react";
import { getContacts, deleteContact } from "../services/api";

const ContactList = ({ onEdit }) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getContacts().then((res) => {
      const sortedContacts = res.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContacts(sortedContacts);
    });
  }, []);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact._id !== id)
    );
  };

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />

      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <div key={contact._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h3>{contact.name}</h3>
            <p>{contact.email} | {contact.phone}</p>
            <button onClick={() => onEdit(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;

import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import "./Home.css"; 

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="home-container">
      <h1 className="home-title">Contact Manager</h1>
      
      <div className="content-container">
        <div className="form-container">
          <ContactForm contact={selectedContact} onSuccess={() => setSelectedContact(null)} />
        </div>

        
        <div className="list-container">
          <ContactList onEdit={setSelectedContact} />
        </div>
      </div>
    </div>
  );
};

export default Home;

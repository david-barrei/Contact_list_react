import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./store/ContactContext";
import ContactList from "./views/ContactList";  
import AddContact from "./views/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <ContactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </ContactProvider>
  );
}

export default App;

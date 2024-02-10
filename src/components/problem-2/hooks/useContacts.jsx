import { useEffect, useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from API for all contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch("https://contact.mediusware.com/api/contacts/");
      const data = await res.json();
      setContacts(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  return [contacts, setContacts];
};

export default useContacts;

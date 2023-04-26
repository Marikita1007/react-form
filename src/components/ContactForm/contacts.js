import { useContext } from "react";
import React, { useReducer, createContext } from 'react'; 

const [contacts, setContacts] = useState([
    {
        id: 1,
        firstname: "Gandalf",
        lastname: "Legris",
        email: "gandalf@laconte.lotr"
    },
    {
        id: 2,
        firstname: "Sarumane",
        lastname: "Leblanc",
        email: "sarumane@laconte.lotr"
    }
]);


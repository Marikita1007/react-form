import React, { useReducer, createContext } from 'react'; 

// const [contacts, setContacts] = useState([
//     {
//         id: 1,
//         firstname: "Gandalf",
//         lastname: "Legris",
//         email: "gandalf@laconte.lotr"
//     },
//     {
//         id: 2,
//         firstname: "Sarumane",
//         lastname: "Leblanc",
//         email: "sarumane@laconte.lotr"
//     }
// ]);

const initialState = [
    {
        id: 0,
        firstname: "",
        lastname: "",
        email: ""
    }];
function contactReducer(action){
    return 0;
}
export const ContactContext = createContext([]);
const ContactProvider = ({children}) => {
    const [state,dispatch] = useReducer(contactReducer,initialState)
    return <ContactContext.Provider value={[state,dispatch]}> 
                {children}
            </ContactContext.Provider>
}

export default ContactProvider;

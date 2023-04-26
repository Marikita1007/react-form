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

let updateState =  {
    id: 0,
    firstname: "",
    lastname: "",
    email: ""
};
function contactReducer(state, action){
    let newList = [...state];
    switch(action.type){
        case"changeLastName":
            updateState.lastname = action.value;
            return[...state];
        case "changeFirstName":
            updateState.firstname = action.value;
            return[...state];
        case "changeMail":
            updateState.email = action.value;
            return[...state];
        case "addContact":
            updateState.id = action.value;
            const newElem= {
                id: updateState.id ,
                firstname: updateState.firstname,
                lastname: updateState.lastname,
                email: updateState.email
            };
            newList.push(newElem);
            return[...newList];
        case "delContact":
             let List = newList.filter(el =>  el.id != action.value);
             return [...List];

        default:
            return [...state];
    }
}
export const ContactContext = createContext([]);
const ContactProvider = ({children}) => {
    const [state,dispatch] = useReducer(contactReducer,initialState)
    return <ContactContext.Provider value={[state,dispatch]}> 
                {children}
            </ContactContext.Provider>
}

export default ContactProvider;

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";


const ContactList = () => {
    const [state,dispatch] = useContext(ContactContext);
    
    console.log(state)
    return(
        <ul>
            {state.map((el,i)=> <li key={i}> {el.id} {el.firstname} {el.lastname} {el.email} </li>)}
        </ul>
    )
}

export default ContactList;
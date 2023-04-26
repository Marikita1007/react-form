import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";
import './ContactList.scss'


const ContactList = () => {
    const [state,dispatch] = useContext(ContactContext);

    console.log(state)
    return(
        <ul className="display-list">
            {state.map((el,i)=> <li key={i}> <ul className="display-name">
                                            <li>{el.id} </li>
                                            <li>{el.firstname} </li>
                                            <li>{el.lastname}</li>
                                            <li>{el.email} </li>
                                            <button onClick= { () => dispatch({type:"delContact",value:el.id})}>X</button>
                                            </ul> </li>)}
        </ul>
    )
}

export default ContactList;
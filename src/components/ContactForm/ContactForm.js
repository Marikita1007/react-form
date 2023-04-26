import { useContext } from "react";
import './ContactForm.scss';
import  { ContactContext } from "../../context/ContactContext";


let date = new Date();
//   let timestamp = now.getTime();
function ContactForm(){

const [state,dispatch] = useContext(ContactContext);

function handleInputChange(e){
    const val = e.target.value;
    switch(e.target.name){
        case "lastname":
               return dispatch({type:"changeLastName", value:val})
        case "firstname":
            return dispatch({type:"changeFirstName", value:val})
        case "email":
            return dispatch({type:"changeMail", value:val})
            
    }

}
const addContact = () =>{
    return dispatch({type:"addContact",value: date.getTime() })
}

    return ( <form onSubmit={addContact}>
        <label>
          Nom de famille:
          <input
            type="text"
            name="lastname"
            onChange={(e) => {handleInputChange(e)}}
          />
        </label>
        <label>
          prénom:
          <input
            type="text"
            name="firstname"
            onChange={(e) => {handleInputChange(e)}}
          />
        </label>
        <label>
          adresse mail:
          <input
            type="email"
            name="email"
            onChange={(e) => {handleInputChange(e)}}
          />
        </label>
        <button type="submit">ajout</button>
      </form>
    )

}

export default ContactForm;
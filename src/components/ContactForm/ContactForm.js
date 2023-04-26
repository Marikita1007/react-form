import { useContext } from "react";
import  { ContactContext } from "../../context/ContactContext";
import './ContactForm.scss';



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
        default :
            return "code not Recognize"
            
    }

}
const addContact = (e) =>{
    e.preventDefault();
    let date = new Date();
    const val = date.getTime();
    console.log(val);
    return dispatch({type:"addContact",value: val })
}

    return (
    <div className="contact-list">
    <form onSubmit={(e) => addContact(e)}>
        <ul>
        <li>
        <label>
          Nom de famille:
          <input
            type="text"
            name="lastname"
            onChange={(e) => {handleInputChange(e)}}
          />
        </label>
        </li>
<li>
<label>
          <p>prénom:</p>
          <input
            type="text"
            name="firstname"
            onChange={(e) => {handleInputChange(e)}}
          />
    </label>
</li>
    <li>
    <label>
          adresse mail:
          <input
            type="email"
            name="email"
            onChange={(e) => {handleInputChange(e)}}
          />
        </label>
    </li>

        </ul>

        <button type="submit">ajout</button>
      </form>
      </div> 
    )

}

export default ContactForm;
import { useState } from "react";
import "./components/ContactForm/contact.scss";
import { contacts } from "./components/ContactForm/contacts";

function App() {

  const [newContact, setNewContact] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({
      ...newContact,
      [name]: value
    });
  };

  const addContact = (event) => {
    event.preventDefault();
    const now = new Date();
    const timestamp = now.getTime();
    const contactToAdd = {
      id: timestamp,
      ...newContact
    };
    setContacts([...contacts, contactToAdd]);
    setNewContact({
      firstname: "",
      lastname: "",
      email: ""
    });
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <div className="contact-list">
      <h1>連絡先一覧</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstname} {contact.lastname} ({contact.email}){" "}
            <button onClick={() => deleteContact(contact.id)}>削除</button>
          </li>
        ))}
      </ul>
      <form onSubmit={addContact}>
        <label>
          姓:
          <input
            type="text"
            name="lastname"
            value={newContact.lastname}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        <label>
          名:
          <input
            type="text"
            name="firstname"
            value={newContact.firstname}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        <label>
          メールアドレス:
          <input
            type="email"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        <button type="submit">追加</button>
      </form>
    </div>
  );
}

export default App;

// contacts = [
//   {
//     id: 1,
//     firstname: "Gandalf",
//     lastname: "Legris",
//     email: "gandalf@laconte.lotr"
//   },
//   {
//     id: 2,
//     firstname: "Sarumane",
//     lastname: "Leblanc",
//     email: "sarumane@laconte.lotr"
//   }
// ]

// => 1 formulaire d'ajout de contact
// => 1 boutton pour supprimer un contact
// => mettre en forme ( de preference avec SCSS et responsif )

// Privilégier l'utilisation de Context+Provider pour la gestion des données

// /!\ 
//   pour avoir un id unique : utiliser un timestamp

//   let now = new Date();
//   let timestamp = now.getTime();
// /!\

// => コンタクトを追加するための1つのフォーム
// => コンタクトを削除するための1つのボタン
// => フォーマット ( できればSCSSとresponsifがあればよい )

// データ管理にContext+Providerの利用を優先する。

// /!\ 
// 一意なIDを持つために : タイムスタンプを使う

// let now = new Date()；
// let timestamp = now.getTime()；
// /!\


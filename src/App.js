import { useState } from "react";
import { contacts } from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactProvider from "./context/ContactContext";

function App() {
    return (
      <ContactProvider>
        <ContactForm/>
        <ContactList/>
      </ContactProvider>
    )
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


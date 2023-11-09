import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import English from '../lang/en.json';

const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "en") {
  lang = English;
} else if (local === "fr") {
  lang = French;
} else {
  lang = English;
}

const Wrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);

   function selectLanguage(e) {
    console.log("selectLanguage")
    console.log(e)
    let newLocale;
    if(e){
      newLocale = e.target.value;
    } else {
      newLocale = "en";
    }
       setLocale(newLocale);
       if (newLocale === 'en') {
           setMessages(English);
       } else {
           if (newLocale === 'fr'){
               setMessages(French);
           } else {
               setMessages(English);
           }
       }
   }

   return (
       <Context.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>

   );
}

export { Wrapper, Context };

import { Context } from './LocaleWrapper'
import { useContext } from 'react'

export default function LanguageSwitch() {
  const context = useContext(Context)
  console.log(context.locale.toString().slice(0, 2))


  return (
       <select className="bg-black text-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1" value = {context.locale} onChange={context.selectLanguage}>
         <option selected value= 'en'>English</option>
         <option value= 'fr'>French</option>
       </select>
  )
}


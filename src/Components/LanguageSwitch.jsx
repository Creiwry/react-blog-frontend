import { useAtom } from 'jotai'
import { localisationAtom } from '../Atoms/localisationAtom';
import { useNavigate } from "react-router-dom";

export default function LanguageSwitch() {
  const [language, setLanguage] = useAtom(localisationAtom)
  const navigate = useNavigate();

  const switchLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
    navigate("/");
  };

  return (
  <div>
    <button onClick={switchLanguage} className="text-2xl dark:text-white">{language || "no language set"}</button>
  </div>
  )
}

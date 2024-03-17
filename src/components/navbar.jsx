import { useTheme } from "../themeContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect} from "react";
import { useTranslation } from "react-i18next";
export default function Navbar(){
    const {theme,toggleTheme}=useTheme();
    const {i18n}=useTranslation();
    

    const languages=[
    {code:"en",lang:"English"},
    {code:"ar",lang:"Arabe"},
    {code:"fr",lang:"Frensh"},
    {code:"es",lang:"Spanish"}
   ]
 
 
   useEffect(()=>{
    document.body.dir=i18n.dir();
   },[i18n,i18n.language])


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}
   
    return <>
    
     <nav className="navBar">
        <div className="mode-switch">
          <label>
            <input type="checkbox" onChange={toggleTheme} checked={theme==="dark"}/>
            <span className="slider round"></span>
          </label>
        </div>

        <div>
                <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                  
                    {languages.map((language) => (
                        <option key={language.code} value={language.code}>{language.lang}</option>
                    ))}
                </select>
            </div>

    </nav> 
   
    
    
    </>
}
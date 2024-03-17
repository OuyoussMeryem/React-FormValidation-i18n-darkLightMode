import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext=createContext();
export const useTheme=()=>{
    return useContext(ThemeContext);
}

export default function ThemeProvider({children}){

    
    const [isDarkMode,setIsDarkMode]=useState(false);

    const toggleTheme=()=>{
        return setIsDarkMode(prevState=>!prevState)
    }

    const theme=isDarkMode ?"dark":"light";

    useEffect(()=>{
     document.documentElement.setAttribute("data-theme",theme);
    },[isDarkMode,theme])

    return <>
    <ThemeContext.Provider  value={{theme,toggleTheme}}>

    {children}

    </ThemeContext.Provider>
    
    </>
}
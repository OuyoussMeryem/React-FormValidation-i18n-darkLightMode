import { useTheme } from "../themeContext"
export default function Test(){

  
   const {theme,toggleTheme}=useTheme();
   
    return <>
    <h1>Hello world</h1>
    <p>Test page</p>
    <nav className="navbar">
        <div className="mode-switch">
          <label>
            <input type="checkbox" onChange={toggleTheme} checked={theme==="dark"}/>
            <span className="slider round"></span>
          </label>
        </div>
    </nav>
    
    </>
}
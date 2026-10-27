import { createContext, useState } from "react";

export let ThemeContext = createContext(null);
export function ThemeProvider({children}){
    const [theme,setTheme] = useState("light")
    return(<>
        <ThemeContext.Provider value={{theme , setTheme}}>{children}</ThemeContext.Provider>
        </>)
}
import { useState } from "react"



export const Toogleapp = () =>{
    const [theme,setTheme] = useState(bool)
    function handletoggle () {
        setTheme(!theme)
    }



    return (
        <div>
            <h1>Toogle App</h1>
            <button onClick={handletoggle}>{setTheme} </button>
        </div>
    )
}
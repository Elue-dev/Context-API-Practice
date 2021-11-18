import React, { useContext } from 'react'
import ThemeContext from './themeContext';

export default function ThemedButton(props) {
    //OLD WAY (Before hooks)
    // return(
    //     <ThemeContext.Consumer>
    //         {(themeContext)=> <h1>{themeContext.theme}</h1>}
    //     </ThemeContext.Consumer>
    // )

    //NEW WAY
    const themeContext = useContext(ThemeContext);
    return <h1>{themeContext.theme}</h1>

}

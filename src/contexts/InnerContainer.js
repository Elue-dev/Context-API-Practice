import React, { useContext } from 'react'
import ThemedButton from './ThemedButton'
import ThemeContext from './themeContext'

export default function InnerContainer(props) {

    // const setTheme = useContext(ThemeContext).setTheme
    // const theme = useContext(ThemeContext).theme

    const {theme, setTheme} = useContext(ThemeContext)
    return(
            <>
                <button onClick={(e)=>setTheme(theme === 'Blue'? 'Red' : 'Blue')}>
                {theme === 'Blue' ? 'Switch to Red' : 'Switch to Blue'}
                </button>
                <ThemedButton />
            </>
    )
}
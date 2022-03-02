import React from 'react'
import initialState from './initialState'

const ThemeContext = React.createContext(initialState)

const ThemeProvider = ({ children }) => {
    const [activeColor, setActiveColor] = React.useState(initialState.colors.red)

    React.useEffect(() => {
        // On mount
    }, [])

    return (
        <ThemeContext.Provider value={{ activeColor, setActiveColor }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }

import React, { type FC, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext'

export interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
  document.body.className = defaultTheme + " " + 'colors'
  const [theme, setTheme] = useState(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
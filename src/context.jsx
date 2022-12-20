import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

// Musi by children aby to co jest potem w srodku czyli cala aplikacja sie w tym jakby renderowala

const AppProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(1)

  return (
    <AppContext.Provider
      value={{
        navActive,
        setNavActive,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

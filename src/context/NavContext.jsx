/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react'
import { createContext } from 'react'

export const NavbarContext = createContext()
const NavContext = ({children}) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
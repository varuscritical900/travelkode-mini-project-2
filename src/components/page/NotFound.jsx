import React from 'react'
import { TabTitle } from '../../utilities/Title'
import NavBar from '../semantics/Navbar/NavBar'

export default function NotFound() {
  TabTitle('Page Not Found');
  return (
    <div>
    <NavBar></NavBar>
    NotFound
    </div>
  )
}

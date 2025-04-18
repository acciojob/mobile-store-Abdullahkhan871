import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/admin"}>Admin</Link></li>
                <li><Link to={"/product/:id"}>Product</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavigationBar
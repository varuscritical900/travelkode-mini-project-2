import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {MdOutlineTravelExplore} from 'react-icons/md'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export default function NavBar() {

    const [active , setActive] = useState('navBar')
    // Function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }

    // Function to remove navBar
    const removeNavbar = ()=>{
        setActive('navBar')
    }

  return (


    <section className='navBarSection'>
                <header className="header flex">
            <div className='logoDiv'>
                {/* <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/>TravelKode</h1>
                </a> */}
                
                <Link to={"/HOME"} className="logo flex">
                <h1><MdOutlineTravelExplore className="icon"/>TravelKode</h1>
                </Link>

            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <Link to={"/Home"} className="navLink">Home</Link>
                    </li>

                    <li className="navItem">
                    <Link to={"/all"} className="navLink">Packages</Link>
                    </li>

                    <li className="navItem">
                        <Link to={"/all"} className="navLink">Shop</Link>
                    </li>

                    <li className="navItem">
                        <Link to={"/all"} className="navLink">About</Link>
                    </li>

                    <li className="navItem">
                        <Link to={"/add"} className="navLink">New Destination</Link>
                    </li>

                    <li className="navItem">
                        <Link to={"/all"} className="navLink">Contact</Link>
                    </li>

                    <button className='btn'>
                        <Link to={"/all"} className="navLink">BOOK NOW</Link>
                    </button>
                </ul>
                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
  )
}
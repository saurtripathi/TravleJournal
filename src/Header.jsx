import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import data from './data.js'

function Header(){

    return(
        <header>
            <img className='header--img' src='./public/header_img.png' alt='Header icon' />
            <p className='header--p'>my travel journal.</p>
        </header>
    )

}

export default Header

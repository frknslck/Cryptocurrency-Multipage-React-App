import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
            <div className='navbarr'>
                <Link to={"/"}>
                    <FaCoins className='icon' />
                </Link>
                <h1>Lumine Coin</h1>
                <Link to={"/"}>
                    <FaCoins className='icon' />
                </Link>
            </div>
    )
}

export default Logo
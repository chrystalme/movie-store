import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-around items-center'>
      <Link to="/"><div>Movie App</div></Link>
     <div className='text-center text-indigo-400'><FaUser /></div> 
     
    </div>
  )
}

export default Header

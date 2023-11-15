import React from 'react'
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <div className='flex flex-col left-0'>
      <Link to= "home"> <button>home</button></Link>
        <Link to= "about"> <button>About Me</button> </Link>
        <Link to= "projects"><button>Projects</button></Link>
        <Link to= "contact"><button>Contact Me</button></Link>
        <Link to= "resume"><button>Resume</button></Link>

    </div>
    
  )
}

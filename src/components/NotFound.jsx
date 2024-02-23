import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-[100vh] space-y-10 pt-10 containerz'>
       <h2 className='text-3xl font-semibold text-white'>Page Not Found</h2> 
       <p className='text-2xl font-semibold text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, dolorem quibusdam excepturi illum nobis explicabo quos quisquam maxime magnam officiis!</p>

       <p className='text-2xl font-meduim text-gray-400 '>Go to the <Link to='/' className='text-primaryYellow'>Homepage</Link>.</p>
    </div>
  )
}

export default NotFound
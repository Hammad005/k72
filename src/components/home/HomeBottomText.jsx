import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <>
    <div className='flex items-center justify-center gap-3 font-[font2]'>
    <Link to={'/work'} className='text-[6.5vw] hover:text-yellow-200 hover:border-yellow-200 transform transition-colors ease-in-out leading-[6vw] border-3 border-white rounded-full px-10 pt-2 mb-2 uppercase'>Work</Link>
    <Link to={'/agency'} className='text-[6.5vw] hover:text-yellow-200 hover:border-yellow-200 transform transition-colors ease-in-out leading-[6vw] border-3 border-white rounded-full px-10 pt-2 mb-2 uppercase'>agency</Link>
    </div>
    </>
  )
}

export default HomeBottomText
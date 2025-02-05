import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContent } from '../context/AppContext'

const Header = () => {

    const navigate =useNavigate()

    const {userData} = useContext(AppContent)

  return (
    <div className='flex flex-col items-center mt-40 px-4 text-center text-black-800'>
        <img src={assets.header_img} alt=""
        className='w-36 h-36 rounded-full mb-6' />
        <h1 className='text-3xl mt-5 mb-6'>Hello {userData ? userData.name : 'there'}</h1>
        <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to Techland Electronics!</h2>

        <p className='mt-5 mb-8 max-w-xl text-2xl'>Discover a world of quality products at unbeatable prices. Sign in to get access exclusive deals and enjoy a seamless shopping experience.</p>
    <div className='flex mt-5 gap-4'>
        <button className='flex items-center gap-2 border border-black-5000 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-all'>Sign Up<img src={assets.arrow_icon} alt="" /></button>
        <button onClick={()=>navigate('/login')} className='flex items-center gap-2 border border-black-5000 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointern transition-all'>Login <img src={assets.arrow_icon} alt="" /></button>
    </div>
        
    </div>
  )
}

export default Header
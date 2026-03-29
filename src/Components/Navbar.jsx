import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='px-[25px] lg:p-4 top-0 w-full bg-[#0F172A] fixed z-50'>
      <div className="flex flex-row justify-between items-center gap-4 px-20">
        <img src='/logo.png' alt="Logo" className='size-16' />
        <div className='flex justify center gap-10 text-lg'>
          <a href='#about'>About</a>
          <a href='#skill'>Skill</a>
          <a href='#project'>Project</a>
          <a href='#education'>Education</a>
        </div>
        <a href='https://github.com/Resham2323/' className='githubBtn border border-2 text-lg rounded-full px-4 py-2'>Github Profile</a>
      </div>
    </div>
  )
}

export default Navbar

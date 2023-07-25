'use client'
import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'

const Dropdown = ({options,buttonText}) => {
  const [isOpen,setIsOpen] = useState(false)

  const toggleHandler = ()=> {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (option)=> {
    console.log(`Your Option is ${option}`);
    setIsOpen(false)
  }

  return (
    <div className='relative'>
        <button onClick={toggleHandler} className='h-10 ml-1 text-sm border rounded-md w-28'>
          { buttonText }<span className='absolute top-3 right-1'><AiOutlineDown/></span>
        </button>
        {
          isOpen && (
            <div  className='absolute w-40 bg-white border rounded-md shadow-lg'>
               {options.map((option,index)=>(
                <div onClick={()=>handleOptionClick(option)} key={index} className='px-4 py-2 hover:cursor-pointer hover:bg-blue-300'>
                  {option}
                </div>
               ))} 
            </div>
          )
        }
    </div>
  )
}

export default Dropdown
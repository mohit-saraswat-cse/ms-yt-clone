import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux';

// Sample Button List Without Functionality
const list=["All","Live","Gaming","Cricket","Music","Movies","Comedy","Action","Software","ReactJs","Redux"];

const ButtonList = () => {
  const isMenuOpen = useSelector((store)=> store.appSlice.isMenuOpen);
  return (
    <div className={`flex flex-row ml-4 dark:bg-slate-800 dark:text-slate-300 ${isMenuOpen ? 'ml-[16rem]' : ''}`}>
      {
        list.map((item,index)=> <Button key={index} name={item}/>)
      }
    </div>
  )
}

export default ButtonList
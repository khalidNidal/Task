import React from 'react'
import Buttonborder from '../Buttonborder/Buttonborder'
import Title from '../Title/Title'

export default function Body() {
  return (
    <div>
        
        <div className='container '>
    
        <div className='grid grid-cols-1 md:grid-cols-3  gap-5  '>

        <div className=' col-span-2'>
        <Title></Title>
        <Title></Title>
        <Title></Title>
        <Title></Title>
        <Title></Title>
        <Title></Title>
        <Title></Title>
        <Title></Title>
        </div>

        <div>
        <Buttonborder></Buttonborder>
        </div>

      </div>

    </div>
    
    </div>
  )
}

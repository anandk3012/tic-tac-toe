import React from 'react'

export default function Square({value,onClick}) {
  return (
    <div 
    className='flex items-center justify-center w-1/3 p-3 border-lg border-l-gray-950'
    onClick={onClick}
    style={{ cursor: 'pointer', width: '100px', height: '100px', border: '1px solid black' }}
    >
      <h1 className="text-2xl text-bold">
        {value}
      </h1>
    </div>
  )
}

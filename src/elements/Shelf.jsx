import React from 'react'
import './shelf.css'

export const Shelf = () => {
  return (
    <div className='Shelf'>
      <div className="rectangle">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="vertical-line"></div>
        <div className="circle"></div>
        <div className="circle circle2"></div> {/* Añadimos un segundo círculo */}
      </div>
    </div>
  )
}

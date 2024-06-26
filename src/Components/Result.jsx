import React from 'react'
import { Formatpercentage } from '../utils/helper.js'

export default function Result({
    error,
    accuracy,
    total,
    className=""
}) {

  return (
   <ul className={`flex flex-col items-center ${className}`}>
         <li className="text-red">Errors: {error}</li>
         <li className="text-red">Accuracy: {Formatpercentage(accuracy)}</li>
         <li className="text-red">Total: {total}</li>
        </ul>
  )
}

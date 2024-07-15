import React from 'react'

const Input = ({text}) => {
  return (
    <input type="text" placeholder={text} className="input input-bordered border-green text-green w-full max-w-xs bg-white placeholder-custom-green" />
  )
}

export default Input
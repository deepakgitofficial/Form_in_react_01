import React from 'react'

const TextField = ({id, name, label, onChangeFun, error, errClass, value ,type}) => {
  return (
    <>
    <div className='input-parent'>
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} onChange={onChangeFun}  value={value} type={type}/>
        <p className={errClass}>{error}</p>
      </div> 
    </div> 
    </>
  )
}

export default TextField
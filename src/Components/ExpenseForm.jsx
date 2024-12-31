import React, { useState } from 'react'

export default function ExpenseForm({ setExpData }) {
  const[inputVal, setInputVal]=useState({ 
    title: '',
    category:'',
    amount: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setExpData((prevState) => [...prevState, {...inputVal, id: crypto.randomUUID()}])
    e.target.reset()
    
    setInputVal({ title: '', category:'', amount: ''})
  } 
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title"  onChange={(e)=> setInputVal((prev)=>({...prev, title: e.target.value}))}/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category"onChange={(e)=>setInputVal((pre)=> ({...pre, category: e.target.value}))}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount"  onChange={(e)=>setInputVal((pre)=> ({...pre, amount: e.target.value}))}/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}
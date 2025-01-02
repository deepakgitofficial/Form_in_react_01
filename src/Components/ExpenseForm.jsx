import React, { useState } from 'react'
import TextField from '../InputFields/TextField'
import { SelectField } from '../InputFields/SelectField'

export default function ExpenseForm({ setExpData }) {
  const [inputVal, setInputVal] = useState({
    title: '',
    category: '',
    amount: ''
  })
  const [warn, setWarn] = useState({})

  // --------form-valitation----------
  const validConfig = {
    title: [
      { required: true, message: 'pls enter title!' },
      { minLength: 4, message: 'minimum 4 character is required!' },
    ],
    category: [{ required: true, message: 'pls select at lest one category' }],
    amount: [{ required: true, message: 'pls enter amount' }]
  }

  function validateFun(vParameter) {

    const errData = {}

    const arr1 = Object.entries(vParameter);

    arr1.forEach(([key, value]) => {

      validConfig[key].some((rule) => {
        if (rule.required && !value) {
          errData[key] = rule.message
          return true
        }
        if (rule.minLength && value.length < 4) {
          errData[key] = rule.message
          return true
        }
      })
    })
    setWarn(errData)
    return errData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validateFun(inputVal)
    // console.log(validateResult)
    if (Object.keys(validateResult).length) return

    setExpData((prevState) => [
      ...prevState,
      { ...inputVal, id: crypto.randomUUID() }
    ])

    setInputVal({ title: '', category: '', amount: '' })
    e.target.reset()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputVal((pre) => ({ ...pre, [name]: value }))
    setWarn({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <TextField
        id='title'
        name='title'
        label='Title'
        onChangeFun={handleInputChange}
        error={warn.title}
        errClass="err"
        value={inputVal.title}
      />

      <SelectField
        id='category'
        name='category'
        label='category'
        onChangeFun={handleInputChange}
        error={warn.category}
        errClass="err"
        value={inputVal.category}

      />

      <TextField
        id='amount'
        name='amount'
        label='Amount'
        onChangeFun={handleInputChange}
        error={warn.amount}
        errClass="err"
        value={inputVal.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  )
}
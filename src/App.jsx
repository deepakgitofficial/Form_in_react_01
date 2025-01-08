import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expenseData from './expenseData'
import { LocalStorage } from './Components/LocalStorate'
// import { DataProvider } from './ContextAPI'
// import Demo from './Components/Demo'

function App() {
  const [expenses, setExpenses] = LocalStorage('expenses', expenseData);
  const [editRowId, setEditRowId] = LocalStorage('isEditRow', '');

  const [inputVal, setInputVal] = LocalStorage('inputVal', {
    title: '',
    category: '',
    amount: ''
  })

  // const [localData, setLocalData] = LocalStorage('myVal', [1, 2, 3]);

  // console.log(localData, 'localData')

  return (
    <main>
      <h1>Track Your Expense</h1>
      {/* <p>{localData.join()}</p> */}
      {/* <button style={{ background: 'gray' }}
        onClick={() => {  
          setLocalData((prev) => [...prev, 10, 20, 30])}
        }>
        setLocalData
      </button> */}
      <div className="expense-tracker">
        {/* <DataProvider>
          <Demo/> 
        </DataProvider> */}
        <ExpenseForm
          setExpData={setExpenses}
          inputVal={inputVal}
          setInputVal={setInputVal}
          editRowId={editRowId}
          setEditRowId={setEditRowId}
        />

        <ExpenseTable
          expenses={expenses}
          setExpData={setExpenses}
          setInputVal={setInputVal}
          setEditRowId={setEditRowId}
        />

      </div>
    </main>
  )
}

export default App
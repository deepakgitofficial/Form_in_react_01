import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expenseData from './expenseData'
// import { DataProvider } from './ContextAPI'
// import Demo from './Components/Demo'

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [editRowId, setEditRowId] = useState('');

    const [inputVal, setInputVal] = useState({
      title: '',
      category: '',
      amount: ''
    })


  return (
    <main>
      <h1>Track Your Expense</h1>
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
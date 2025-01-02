import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expData, setExpData] = useState(expenseData)
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpData={setExpData} />
        <ExpenseTable expenses={expData} setExpData={setExpData}/>
      </div>
    </main>
  )
}

export default App
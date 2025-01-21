import { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import expenseData from "./expenseData";
import { LocalStorage } from "./Components/LocalStorate";
import Demo from "./Components/Demo";
// import { DataProvider } from './ContextAPI'
// import Demo from './Components/Demo'

function App() {
  const [expenses, setExpenses] = LocalStorage("expenses", expenseData);
  const [editRowId, setEditRowId] = LocalStorage("isEditRow", "");

  const [inputVal, setInputVal] = LocalStorage("inputVal", {
    title: "",
    category: "",
    amount: "",
  });
  // const [localData, setLocalData] = LocalStorage('myVal', [1, 2, 3]);
  return (
    <main>
      {/* <p>{localData.join()}</p> */}
      {/* <button style={{ background: 'gray' }}
        onClick={() => {  
          setLocalData((prev) => [...prev, 10, 20, 30])}
        }>
        setLocalData
      </button> */}
      <div className="container">
      <h1 className="text-center py-10">Track Your Expenses</h1>
        <div className="flex md:flex-row flex-col px-5 gap-10">
          <div className="basis-1/2 bg-gray-50 py-10 px-10">
            <ExpenseForm
              setExpData={setExpenses}
              inputVal={inputVal}
              setInputVal={setInputVal}
              editRowId={editRowId}
              setEditRowId={setEditRowId}
            />
          </div>
          <div className="basis-1/2 bg-gray-50 p-10">
            <ExpenseTable
              expenses={expenses}
              setExpData={setExpenses}
              setInputVal={setInputVal}
              setEditRowId={setEditRowId}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

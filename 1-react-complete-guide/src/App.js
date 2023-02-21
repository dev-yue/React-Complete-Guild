import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
import './components/NewExpense/NewExpense.css'

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const [is_top, setIs_top] = useState(false)


  const addExpenseHandler = expense => {
    
    setExpenses((prev) => {
      return [expense, ...prev]
    })
  }

  const clickHandler = () => {
    setIs_top(true)
  }

  const cancelHandler = () => {
    setIs_top(false)
  }

  let top_section = 
  <div className="new-expense">
      <div className="new-expense__actions center" >
        <button type="text" onClick={clickHandler}>Add New Expense</button>
      </div>
  </div>

  if (is_top) {
    top_section = <NewExpense onCancel={cancelHandler} onAddExpense={addExpenseHandler}/>
  }

  return (
    <div>
      {top_section}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

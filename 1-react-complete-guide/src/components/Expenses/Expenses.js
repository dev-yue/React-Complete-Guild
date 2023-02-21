import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const changeOptionHandler = (option) => {
    setSelectedYear(option);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeOption={changeOptionHandler}
          selected={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        }
        props.onAddExpense(expenseData)
        props.onCancel()
    }

  return (
    <div className="new-expense">
      <ExpenseForm onCancel={props.onCancel} onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;

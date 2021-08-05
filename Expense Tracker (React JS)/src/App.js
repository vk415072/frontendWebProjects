// 1. importing ExpenseItem.js component
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* 2. using ExpenseItem.js component as JSX tags */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

// 1. importing ExpenseItem.js component
// import ExpenseItem from "./components/ExpenseItem";
// 6. importing Expenses.js
import Expenses from "./components/Expenses/Expenses";

const App = () => {
   // 3. creating data for ExpenseItem
   const expenses = [
      {
         id: "e1",
         title: "Car Wash",
         amount: "65",
         date: new Date(2021, 6, 12),
      },
      {
         id: "e2",
         title: "Kids Shopping",
         amount: "205",
         date: new Date(2021, 6, 9),
      },
      {
         id: "e3",
         title: "Ice Cream",
         amount: "25",
         date: new Date(2021, 6, 12),
      },
      {
         id: "e4",
         title: "Shopping",
         amount: "89",
         date: new Date(2021, 5, 10),
      },
   ];

   return (
      <div>
         <h2>Let's get started!</h2>
         {/* 2. using ExpenseItem.js component as JSX tags */}
         {/* 4. creating the attributes with data expenses data created above */}
         {/* 5. moving these expenses items to Expense.js */}
         {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
         <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
         <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
         <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}
         {/* 7. now using Expenses.js component */}
         <Expenses items={expenses} />
      </div>
   );
}

export default App;

// 2. importing App.js
import ExpenseItem from "./ExpenseItem";
// 3. importing its css
import "./Expenses.css";
// 4. importing Card.js (the wrapping components for all components)
import Card from "./Card";

function Expenses(props) {
   return (
      // 1. copied from App.js
      // 5. Wrapping the HTML with <Card> tag instead for default <div> tag
      <Card className="expenses">
         <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
         <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
         <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
         <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
      </Card>
   );
}

export default Expenses;

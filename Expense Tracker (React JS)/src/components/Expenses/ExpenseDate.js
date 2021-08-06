// 4. adding css
import "./ExpenseDate.css";
// 2. adding props to access date from ExpenseItem.js
const ExpenseDate = (props) => {
   // 1. copied from ExpenseItem.js
   const month = props.date.toLocaleString("en-US", { month: "long" });
   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
   const year = props.date.getFullYear();

   return (
      // 3. copied from ExpenseItem.js
      <div className="expense-date">
         <div className="expense-date__month">{month}</div>
         <div className="expense-date__day">{day}</div>
         <div className="expense-date__year">{year}</div>
      </div>
   );
}

export default ExpenseDate;

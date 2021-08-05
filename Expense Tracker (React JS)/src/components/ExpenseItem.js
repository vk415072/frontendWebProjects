// 6. adding the css to this file
import "./ExpenseItem.css";

// 1. created our first component (it's just a function which returns a HTML)
// 2. It is not really HTML, it is JSX which is dev by React team
function ExpenseItem() {
   // 3. setting fake dynamic data to show using JSX
   const expenseDate = new Date(2021, 2, 28);
   const expenseTitle = "Car Insurance";
   const expenseAmount = 278;

   // 4. adding these const in the JXS tags and returning
   return (
      <div className="expense-item">
         <div>{expenseDate.toISOString()}</div>
         <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">Rs.{expenseAmount}</div>
         </div>
      </div>
   );
}

// 5. exporting the component & importing in app.js
export default ExpenseItem;

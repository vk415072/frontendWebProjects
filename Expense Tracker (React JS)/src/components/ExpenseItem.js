// 6. adding the css to this file
import "./ExpenseItem.css";

// 1. created our first component (it's just a function which returns a HTML)
// 2. It is not really HTML, it is JSX which is dev by React team
// 3. getting property from app.js set attributes. This will make this component reusable.
function ExpenseItem(props) {
   // 3. setting fake dynamic data to show using JSX
   // 4. sending this data into app.js file
   // const expenseDate = new Date(2021, 2, 28);
   // const expenseTitle = "Car Insurance";
   // const expenseAmount = 278;
   // 8. extracting data from date from props
   const month = props.date.toLocaleString("en-US", { month: "long" });
   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
   const year = props.date.getFullYear();

   // 4. adding these const in the JXS tags and returning
   return (
      // 7. now accessing data with properties from app.js
      <div className="expense-item">
         {/* 9. adding the extracted date data */}
         <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
         </div>
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs.{props.amount}</div>
         </div>
      </div>
   );
}

// 5. exporting the component & importing in app.js
export default ExpenseItem;

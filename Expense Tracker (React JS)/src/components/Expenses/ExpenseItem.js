// 6. adding the css to this file
import "./ExpenseItem.css";
// 12. importing ExpenseDate.js
import ExpenseDate from "./ExpenseDate";
// 15. importing Card.css
import Card from "../UI/Card";

// 1. created our first component (it's just a function which returns a HTML)
// 2. It is not really HTML, it is JSX which is dev by React team
// 3. getting property from app.js set attributes. This will make this component reusable.
const ExpenseItem = (props) => {
   // 3. setting fake dynamic data to show using JSX
   // 4. sending this data into app.js file
   // const expenseDate = new Date(2021, 2, 28);
   // const expenseTitle = "Car Insurance";
   // const expenseAmount = 278;

   // 8. extracting data from date from props
   // 10. moving this logic with date JSX to its own separate component,
   //    const month = props.date.toLocaleString("en-US", { month: "long" });
   //    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
   //    const year = props.date.getFullYear();

   // 19. creating a function for test button
   const tempFunction = () => {
      console.log("Clicked");
   };

   // 4. adding these const in the JXS tags and returning
   return (
      // 7. now accessing data with properties from app.js
      // 16. now we can wrap and replace the exterior div with Card.js wrap component so we can apply some common styles to all other components.
      // 17. Now, everything within the <Card> tag will be available in the Card.js file as "props.children" by default.
      <Card className="expense-item">
         {/* 9. adding the extracted date data */}
         {/* 11. moving this date JSX to ExpenseDate.js */}
         {/* <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
         </div> */}
         {/* 13. adding ExpenseDate component instead */}
         {/* <ExpenseDate></ExpenseDate> */}
         {/* 14. If we don't have anything in between the tags to write
         we can write like this self closing tags */}
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs.{props.amount}</div>
         </div>
         {/* 18. adding a temp button for testing an event listener in React */}
         {/* 20. adding a the function within onClick */}
         {/* 21. note: don't execute the function, just point at it. or, don't add parentheses after the function name */}
         <button onClick={tempFunction}>Change Title</button>
      </Card>
   );
};

// 5. exporting the component & importing in app.js
export default ExpenseItem;

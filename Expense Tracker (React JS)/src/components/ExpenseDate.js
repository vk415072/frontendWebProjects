// 2. adding props to access date from ExpenseItem.js
function ExpenseDate(props) {
   // 1. copied from ExpenseItem.js
   const month = props.date.toLocaleString("en-US", { month: "long" });
   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
   const year = props.date.getFullYear();

   return (
      // 3. copied from ExpenseItem.js
      <div>
         <div>{month}</div>
         <div>{day}</div>
         <div>{year}</div>
      </div>
   );
}

export default ExpenseDate;

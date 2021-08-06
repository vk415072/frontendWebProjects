import "./Card.css";
// 1. This component will work as a wrapping component for all other components,
const Card = (props) => {
   // 4. But our custom component tags will only support classes what we tell them, not like normal HTML tags
   // 5. So, adding the className from props.className with the return HTML className
   const classes = "card " + props.className;

   // 2. children is a reserved name, we don't set it anywhere else.
   // 3. But, anything in between the opening and closing tags of <Card> tag outside, will be count as children and will be available here.
   // 6. passing classes const under the className.
   return <div className={classes}>{props.children}</div>;
};

export default Card;

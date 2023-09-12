import classes from './MealtemForm.module.css';
import React,{useState,useRef} from 'react';
import Input from '../../UI/Input';
//import Carcntxt from '../../../store/Cart-Context';
// const MealItemForm=props=>{
//     const cartcntx=useContext(Carcntxt);
//     const addItemToCardHandler=(event)=>{
//         event.preventDefault();
//         const quantity=document.getElementById('amount_'+props.id).value;
//         console.log(quantity);
//         cartcntx.addItem({...props.item,quantity:quantity});
//             }
//     return(<form className={classes.form}>
//         <Input label='Amount' 
//         input={{
//             id:'amount_'+props.id,
//             type:'number',
//             min:'1',
//             max:'5',
//             defaultValue:'1'

//         }}/>
//         <button onClick={addItemToCardHandler}>+ ADD</button>
//     </form>);
// };
// export default MealItemForm;

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
  
      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
  
      props.onAddToCart(enteredAmountNumber);
    };
  
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label='Amount'
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    );
  };
  
  export default MealItemForm;
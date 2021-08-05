let Input = (props) =>{

    return(
        <input 
        onChange = { (e) => {
                props.handleInput(e.currentTarget.value);
            
            }}
    
            onKeyDown = {
              (e)=>{
                  if(e.key == 'Enter'){
                   props.handleTask();
                  }
              }
            }
            value = {props.currInput} />
    
           
    );
};

export default Input;
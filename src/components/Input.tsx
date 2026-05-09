type InputProps ={
    input:string;
    setInput:(value: string) => void;
};

export default function Input({input,setInput}: InputProps){
    return(

      <label>
        <h2>Write anything!</h2><br />
      <textarea 
      name="content"
      placeholder="Type Anything!"
      value={input}
       onChange={(e) =>setInput(e.target.value)} //e.target.value is the currently typed text and setInput will updates the state
      />
      </label>
      
      );
}
    

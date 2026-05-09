type SubmitProps ={
    input:string;
    setDisplayText:(value: string) => void;
}

export default function Submit({input,setDisplayText}: SubmitProps){
    return(
    <div>
        <h3>Submit Your data</h3>
         {/* <Button />  */}
        <button onClick={() => setDisplayText(input)}>Submit</button> {/*when button is clicked setDisplayText(input) runs .. this copy the input data to displaytext*/}
      </div>
      );
}
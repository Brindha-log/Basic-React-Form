type OutputProps ={
   displayText:string;
}

export default function Output({displayText}: OutputProps){
    return(
    <div>
        <h3>Output:</h3>
        {/* <p>{displayText}</p> */}
        <textarea
        readOnly
        value={displayText}
        placeholder="your input displays here !!"
        >

        </textarea>
      </div>
      );
    }
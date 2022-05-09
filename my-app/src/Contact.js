import React from "react";
import "./contact.css"

function Contacts(props){
    var nm=props.name.toUpperCase();
   // var st={color:"red",padding:10, border:"solid 1px gray"}
    return(
        <div className="contact_class" style={props.st}>
          <p>{props.id.name}</p>
            <h1>{nm}Contact Page</h1>
            <label>Email Id</label><input type="text"></input><br/>
            <label>Message</label><textarea></textarea>
            <button>Send</button><br/>
        </div>
    )

}
export default Contacts
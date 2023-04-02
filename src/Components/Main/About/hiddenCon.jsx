import React from "react";
import { useState } from "react";
import 'react-transition-group'

function HiddenCon (props) {

  const maxChars = 100;

  const [hidden, setHidden] = useState(true);

  if (props.text.length <= maxChars) {
    return (
      <span>{props.text}</span>
    );
  }

 return (
                   <span>
                      {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}

                      {hidden ? ( <button onClick={() => setHidden(false)}> read more</button>) 

                      : ( <button onClick={() => setHidden(true)}> read less</button>)}

                    </span>


   

  );

}

export default HiddenCon;



// CSSTransition
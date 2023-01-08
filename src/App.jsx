import React, {useState, useEffect} from "react";

function App() {
  const [studentArray, setStudentArray] = useState([]);
  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");

  // helper function

  function submitfunc(){
    setStudentArray([...studentArray,
      {
       userName: userName,
       Password: Password
      }
    ]
        )
     
  }
 
  useEffect(() => {
    console.log(studentArray)
}, [studentArray]);
  return(
      <div className="container mt-5">
         <div><input onChange={(e)=>{setuserName(e.target.value)}} type="text" placeholder="Username"/></div>
         <div><input  onChange={(e)=>{setPassword(e.target.value)}} className="mt-5" type="Password" placeholder="Password"/></div>
          <button onClick={submitfunc} className="btn-primary mt-5">submit</button>
      </div>
  )
}
export default App;

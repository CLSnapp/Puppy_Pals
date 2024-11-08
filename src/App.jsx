import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

// function App() {
//   const [puppies, setPuppies] = useState(puppyList);
//   const [featPupId, setFeatPupId] = useState(null);
//   console.log("puppyList: ", puppyList);

//   return (
//     <>
//       <div className="App">
//         {puppies.map((puppy) => {
//           return <p key={puppy.id}>{puppy.name}</p>;
          
//         })}
//       </div>
//     </>
//   );
// }

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // click,click,boom
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p 
          key={puppy.id}
          onClick={() => { console.log("puppy id: ", puppy.id);}}>{puppy.name}</p>
        );
      })}
    </div>
  );
}

export default App;

import "./App.css";
import "./index.css";
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
console.log(puppyList);

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div className="result">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;

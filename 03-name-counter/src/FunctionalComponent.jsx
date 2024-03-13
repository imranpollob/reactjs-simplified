import { useState } from "react";

export function FunctionalComponent() {
  const [name, setName] = useState("Imran");
  const [age, setAge] = useState(20);

  function incrementAgeBy3() {
    // simulating concurrent state changes
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
    // this is wrong, it will not increment by 3
    // see decrementAgeBy3()
  }

  function decrementAgeBy3() {
    // simulating concurrent state changes
    setAge((newAge) => newAge - 1);
    setAge((newAge) => newAge - 1);
    setAge((newAge) => newAge - 1);
    // it will decrement by 3 as using function to update state
  }

  return (
    <>
      <div className="name-input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="age-buttons">
        <button onClick={incrementAgeBy3}>+++</button>
        <button onClick={() => setAge(age + 1)}>+</button>
        <span>{age}</span>
        <button onClick={() => setAge((newAge) => --newAge)}>-</button>
        <button onClick={decrementAgeBy3}>---</button>
      </div>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  );
}

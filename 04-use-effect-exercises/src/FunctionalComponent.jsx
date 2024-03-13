import { useEffect, useState } from "react";

export function FunctionalComponent() {
  const [name, setName] = useState("Imran");
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("Render");
  });

  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Bye");
    };
  }, []);

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

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
        <button onClick={() => setAge(age + 1)}>+</button>
        <span>{age}</span>
        <button onClick={() => setAge((newAge) => --newAge)}>-</button>
      </div>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  );
}

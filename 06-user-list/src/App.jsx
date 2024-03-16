import { useEffect, useState } from "react";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    const abortController = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: abortController.signal,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  let content = null;

  if (loading) {
    content = <h1>Loading...</h1>;
  } else if (error) {
    content = <h1>Error!</h1>;
  } else {
    content = (
      <div>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1>User List</h1>
      {content}
    </>
  );
}

export default App;

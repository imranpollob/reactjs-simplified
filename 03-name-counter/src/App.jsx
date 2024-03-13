import { FunctionalComponent } from "./FunctionalComponent";
import { ClassComponent } from "./ClassComponent";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <h1>Using Functional Component</h1>
        <FunctionalComponent />
      </div>
      <div className="card">
        <h1>Using Class Component</h1>
        <ClassComponent />
      </div>
    </>
  );
}

export default App;

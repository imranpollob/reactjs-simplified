import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Imran",
      age: 20,
    };
  }

  incrementAgeBy3() {
    // simulating concurrent state changes
    this.setState({ age: this.state.age + 1 });
    this.setState({ age: this.state.age + 1 });
    this.setState({ age: this.state.age + 1 });
    // this is wrong, it will not increment by 3
    // see decrementAgeBy3()
  }

  decrementAgeBy3() {
    // simulating concurrent state changes
    this.setState((prevState) => ({ age: prevState.age - 1 }));
    this.setState((prevState) => ({ age: prevState.age - 1 }));
    this.setState((prevState) => ({ age: prevState.age - 1 }));
    // it will decrement by 3 as using function to update state
  }

  render() {
    return (
      <>
        <div className="name-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="age-buttons">
          <button onClick={() => this.incrementAgeBy3()}>+++</button>
          <button onClick={() => this.setState({ age: this.state.age + 1 })}>
            +
          </button>
          <span>{this.state.age}</span>
          <button
            onClick={() =>
              this.setState((prevState) => ({ age: --prevState.age }))
            }
          >
            -
          </button>
          <button onClick={() => this.decrementAgeBy3()}>---</button>
        </div>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old
        </p>
      </>
    );
  }
}

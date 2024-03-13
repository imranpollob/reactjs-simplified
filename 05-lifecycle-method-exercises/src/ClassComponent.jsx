import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Imran",
      age: 20,
    };
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Render");

    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old`
      );
    }

    if (prevState.name !== this.state.name) {
      document.title = this.state.name;

      if (this.timeout !== null) clearInterval(this.timeout);

      this.timeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }
  }

  componentWillUnmount() {
    console.log("Bye");
    if (this.timeout !== null) clearInterval(this.timeout);
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
        </div>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old
        </p>
      </>
    );
  }
}

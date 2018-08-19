import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Click me"
    };
  }
  // https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705

  //https://jsonplaceholder.typicode.com/

  componentDidMount() {
    //Normally ajax calls happen here
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     //before componentDidMount
  //     //going to be deprecated
  //     console.log("componentWillMount");
  //   }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //   componentWillUpdate() {
  //     //going to be deprecated
  //     console.log("componentWillUpdate");
  //   }

  static getDerivedStateFromProps(nextProps, prevState) {
    // new method replacing componentWillReceiveProps
    return {
      test: "something"
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <a
          onClick={() => {
            this.setState({ value: "Clicked" });
          }}
        >
          {this.state.value}
        </a>
      </div>
    );
  }
}

export default Test;

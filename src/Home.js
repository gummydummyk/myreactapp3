import React, { Component } from 'react';

<<<<<<< HEAD
//const url = process.env.NODE_ENV !== 'production' ? '/react-intl-2/src/Data.php' : './Data.php';

class Homepage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: null,
  //   };
  // }

  // componentDidMount() {
  //   fetch(`${url}`, {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }

  //   })
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }
=======
const url = process.env.NODE_ENV !== 'production' ? '/react-intl-2/src/Data.php' : './Data.php';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(`${url}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
>>>>>>> Add API request

  render() {
    console.log(process.env.NODE_ENV);
    return (
      <div>
        <div className="container">
<<<<<<< HEAD
          {/* {this.state.data} */}
          <h1>Home</h1>
=======
          <h1>Home {this.state.data}</h1>
>>>>>>> Add API request
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    );
  }
}

export default Homepage;

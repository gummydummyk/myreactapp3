import React, { Component } from 'react';

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

  render() {
    console.log(process.env.NODE_ENV);
    return (
      <div>
        <div className="container">
          {/* {this.state.data} */}
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    );
  }
}

export default Homepage;

import React from 'react';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

// App.propTypes = {
//   txt: React.propTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
// Tämä ei toimi, koska React.PropTypes ei ole enää käytössä

App.defaultProps = {
  txt: "this is the default text"
}


export default App;

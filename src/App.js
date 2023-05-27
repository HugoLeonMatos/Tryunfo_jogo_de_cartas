import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo oi</h1>
        <Form onInputChange={ this.onInputChange } { ...this.state } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

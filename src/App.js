import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    console.log(name);
    console.log(value);
    this.setState(
      {
        [name]: value,
      },
      () => this.buttonVerifyVoid(),
    );
  };

  // buttonVerifyVoid = () => {
  //   const { cardName, cardImage, cardRare } = this.state;
  //   const isSaveDisable = false;
  //   if (cardName && cardImage && cardRare === '') {
  //     isSaveButtonDisabled = true;
  //   }
  // };
  buttonVerifyVoid = () => {
    const attrLim = 90;
    const attrTotLim = 210;
    const minValue = 0;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;

    let isSaveButtonDisabled = false;

    if (
      cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === ''
    ) {
      isSaveButtonDisabled = true;
    }

    if (
      Number(cardAttr1) > attrLim
    || Number(cardAttr1) < minValue
    || Number(cardAttr2) > attrLim
    || Number(cardAttr2) < minValue
    || Number(cardAttr3) > attrLim
    || Number(cardAttr3) < minValue
    || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > attrTotLim
    ) {
      isSaveButtonDisabled = true;
    }

    this.setState({
      isSaveButtonDisabled,
    });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.onInputChange } { ...this.state } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;

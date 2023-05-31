import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    filterName: '',
    filterRare: 'todas',
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.buttonVerifyVoid(),
    );
  };

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

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cards,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    const updatedCards = [...cards, newCard];
    console.log(updatedCards);

    this.setState(
      {
        cards: updatedCards,
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardRare: 'normal',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      },
      // req 7 Será validado se o checkbox do Super Trunfo é renderizado ao carregar a página.
      () => {
        if (!hasTrunfo && cardTrunfo) {
          this.setState({ hasTrunfo: true });
        }
      },
    );
  };

  deleteCard = (index) => {
    const { cards, hasTrunfo, cardTrunfo } = this.state;
    const updatedCards = [...cards];
    const deletedCard = updatedCards.splice(index, 1)[0];
    if (deletedCard.cardSavedTrunfo && hasTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    if (index === updatedCards.length && cardTrunfo) {
      this.setState({ cardTrunfo: false });
    }
    this.setState({ cards: updatedCards });
  };

  render() {
    const { cards, filterName, filterRare } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          // isSaveButtonDisabled={ this.isSaveButtonDisabled }
          { ...this.state }
        />
        <Card { ...this.state } />

        <input
          data-testid="name-filter"
          type="text"
          name="filterName"
          value={ filterName }
          onChange={ this.onInputChange }

        />
        <select
          data-testid="rare-filter"
          value={ filterRare }
          name="filterRare"
          onChange={ this.onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {
          cards.filter((card) => card.cardName.toLowerCase()
            .includes(filterName.toLowerCase())
            && (filterRare === 'todas' || filterRare === card.cardRare)).map(({ cardName,
            cardDescription,
            cardImage,
            cardRare,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardTrunfo,
          }, index) => (
            <div key={ index }>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardTrunfo={ cardTrunfo }
              />
              <button
                data-testid="delete-button"
                onClick={ () => this.deleteCard(index) }
              >
                Excluir
              </button>
            </div>
          ))
        }

      </div>
    );
  }
}

export default App;

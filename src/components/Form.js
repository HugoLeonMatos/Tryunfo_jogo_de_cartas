import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    console.log(hasTrunfo);
    return (
      <form action="">
        <label htmlFor="formulario">oi</label>
        <input
          type="text"
          data-testid="name-input"
          id="formulario"
          value={ cardName }
          name="cardName"
          onChange={ onInputChange }
        />
        <textarea
          id=""
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          name="cardDescription"
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          name="cardAttr1"
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          name="cardAttr2"
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          name="cardAttr3"
          onChange={ onInputChange }
        />
        <input
          type="text"
          data-testid="image-input"
          value={ cardImage }
          name="cardImage"
          onChange={ onInputChange }
        />
        <select
          id=""
          data-testid="rare-input"
          value={ cardRare }
          name="cardRare"
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          name="cardTrunfo"
          onChange={ onInputChange }

        />
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

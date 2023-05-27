import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="formulario">oi</label>
        <input type="text" data-testid="name-input" id="formulario" />
        <textarea name="" id="" cols="30" rows="10" data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select name="" id="" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;

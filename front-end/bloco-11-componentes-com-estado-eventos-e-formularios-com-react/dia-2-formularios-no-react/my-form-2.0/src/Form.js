import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <form className='form'>
          <label>
            Nome:
            <input type='text'></input>
          </label>
          <label>
            Email: 
            <input type='text'></input>
          </label>
          <label>
            CPF:
            <input type='text' maxLength='11'></input>
          </label>
          <label>
            Endereço:
            <input type='text'></input>
          </label>
          <label>
            Cidade:
            <input type='text'></input>
          </label>
          <label>
            Estado:
            <select>
              <option>Acre</option>
              <option>Alagoas</option>
              <option>Amapá</option>
              <option>Amazonas</option>
              <option>Bahia</option>
              <option>Ceará</option>
              <option>Distrito Federal</option>
              <option>Espírito Santo</option>
              <option>Goiás</option>
              <option>Maranhão</option>
              <option>Mato Grosso</option>
              <option>Mato Grosso do Sul</option>
              <option>Minas Gerais</option>
              <option>Pará</option>
              <option>Paraíba</option>
              <option>Paraná</option>
              <option>Pernambuco</option>
              <option>Piauí</option>
              <option>Rio de Janeiro</option>
              <option>Rio Grande do Norte</option>
              <option>Rio Grande do Sul</option>
              <option>Rondônia</option>
              <option>Roraima</option>
              <option>Santa Catarina</option>
              <option>São Paulo</option>
              <option>Sergipe</option>
              <option>Tocantins</option>
            </select>
          </label>
          <div>
            Tipo:
            <label>
              <input type='radio' name='tipo'></input>
              Casa
            </label>
            <label>
              <input type='radio' name='tipo'></input>
              Apartamento
            </label>
          </div>
        </form>
      </fieldset>
    )
  }
}

export default Form;
import React from 'react';

class Data extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='formsContainer'>
          <h1>Formulário de cadastro de currículo</h1>
          <fieldset>
            <legend>Dados</legend>
            <form className='form'>
              <label>
                Nome:
                <input type='text' maxLength='40' id='inputName' required></input>
              </label>
              <label>
                Email: 
                <input type='text' maxLength='50' required></input>
              </label>
              <label>
                CPF:
                <input type='text' maxLength='11' required></input>
              </label>
              <label>
                Endereço:
                <input type='text' maxLength='200' required></input>
              </label>
              <label>
                Cidade:
                <input type='text' maxLength='28' required></input>
              </label>
              <label>
                Estado:
                <select required>
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
                  <input type='radio' name='tipo' required></input>
                  Casa
                </label>
                <label>
                  <input type='radio' name='tipo'></input>
                  Apartamento
                </label>
              </div>
            </form>
          </fieldset>
          <fieldset>
          <legend>Dados do último emprego</legend>
            <form className='form'>
              <label>
                Resumo do currículo:
                <textarea maxLength='1000' required></textarea>
              </label>
              <label>
                Cargo:
                <textarea maxLength='40' required></textarea>
              </label>
              <label>
                Descrição do cargo
                <input type='text' maxLength='500' required></input>
              </label>
            </form>
          </fieldset>
        </div>
        <button type='button'>Enviar</button>
        <button type='button'>Limpar</button>
      </div>
    )
  }
}

export default Data;
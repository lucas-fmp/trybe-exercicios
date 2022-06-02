const API_URL = 'https://api.coincap.io/v2/assets';



const fetchCrypto = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .then((cryptoCoinArray) => cryptoCoinArray.forEach((cryptoCoin, index) => {
      if (index < 10) {
        const li = document.createElement('li');
        li.innerHTML = `${cryptoCoin.id} (${cryptoCoin.symbol}): ${parseFloat(cryptoCoin.priceUsd).toFixed(2)}`;
        const ul = document.querySelector('#cryptoList');
        ul.appendChild(li)
      }
    }))
}

fetchCrypto();
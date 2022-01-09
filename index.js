const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]')
const elementKGS = document.querySelector('[data-value="KGS"]')

const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')

getCurrencies()

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()
    const result = await data

    rates.USD = result.Valute.USD
    rates.KGS = result.Valute.KGS

    console.log(rates)

    elementUSD.textContent = rates.USD.Value.toFixed(2)
    elementKGS.textContent = rates.KGS.Value.toFixed(2)

    if (rates.USD.Value > rates.USD.Previous){
        elementUSD.classList.add('top')
    } else {
        elementUSD.classList.add('bottom')
    }

        if (rates.KGS.Value > rates.KGS.Previous){
        elementKGS.classList.add('top')
    } else {
        elementKGS.classList.add('bottom')
    }
}

input.oninput = function () {
    result.value = (parseFloat(input.value) / rates.USD.Value).toFixed(2);
}
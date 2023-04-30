"use strict"

const url = "https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014";

const input__valute = document.querySelector(".input__valute")
const item__eur = document.querySelector(".item__option-eur")
const item__usd = document.querySelector(".item__option-usd")
const btn__convertor = document.querySelector(".btn__convertor")
const out__valute = document.querySelector(".out__valute")
const list__Option = document.querySelector(".list__valute-option")

const block__convertorSale = document.querySelector(".block__convertor-sale")
const input__valuteSale = document.querySelector(".input__valute-sale")
const list__OptionSale = document.querySelector(".list__valute-option-sale")
const item__optionEur = document.querySelector(".item__option-eur")
const item__optionUsd = document.querySelector(".item__option-usd")
const btn__convertorSale = document.querySelector(".btn__convertor-sale")
const out__ValuteSale = document.querySelector(".out__valute-sale")

const showCurrency = document.querySelector(".showCurrency") // кнопка що відкриває додаткову валюту



async function privatbank(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log('res: ', res);
    console.log('data: ', data);
    const usd = data.exchangeRate[14];
    console.log('usd: ', usd);
    const eur = data.exchangeRate[16];
    console.log('eur: ', eur);

    const euro = [
      eur.currency, eur.baseCurrency, eur.purchaseRate, eur.saleRate
    ]
    const dolar = [
      usd.currency, usd.baseCurrency, usd.purchaseRate, usd.saleRate
    ]

    console.log(euro.length);

    n1and1(euro) // eur

    // eur.currency eur
    // n1and2(eur.baseCurrency) // UAH
    // n1and3(eur.purchaseRate) // купляємо
    // n1and4(eur.saleRate) // продаємо

    n2and1(dolar)

    btn__convertor.addEventListener("click", () => {
      for (let i = 0; i < data.exchangeRate.length; i++) {
        let showValute = data.exchangeRate[i];
        let a = list__Option.value.toLowerCase();

        if (a == showValute.currency.toLowerCase()) {
          const result = parseInt(input__valute.value) / showValute.purchaseRateNB;
          out__valute.textContent = result.toFixed(2) + " " + showValute.currency;
          break;
        } else {console.log("error")}
      }
    })

    btn__convertorSale.addEventListener("click", () => {
      for (let i = 0; i < data.exchangeRate.length; i++) {
        let showValute = data.exchangeRate[i];
        let a = list__OptionSale.value.toLowerCase();

        if (a == showValute.currency.toLowerCase()) {
          const result = parseInt(input__valuteSale.value) * showValute.saleRateNB;
          out__ValuteSale.textContent = result.toFixed(2) + " " + showValute.baseCurrency;
          i = data.exchangeRate.length;
        } else {console.log("error")}
      }
      
    })

    showCurrency.addEventListener("click", () => {
      const tableArhive = document.querySelector(".tableArhive")
      showCurrency.style.display = "none"
      tableArhive.style.display = "table"

      for (let i = 0; i < data.exchangeRate.length; i++) {
        let result = data.exchangeRate[i];
        console.log(result);

        if(result.currency != "USD" && result.currency != "EUR")
        tableArhive.insertAdjacentHTML("beforeend", `
          <tr>
            <td class="1">${result.currency}</td>
            <td class="2">${result.baseCurrency}</td>
            <td class="3">${result.purchaseRateNB.toFixed(2)}</td>
            <td class="4">${result.saleRateNB.toFixed(2)}</td>
          </tr>
        `)

        list__Option.insertAdjacentHTML("beforeend", `
          <option value="${result.currency}" class="item__option-${result.currency}">${result.currency}</option>
        `)

        list__OptionSale.insertAdjacentHTML("beforeend", `
          <option value="${result.currency}" class="item__option-${result.currency}">${result.currency}</option>
        `)
      }
      
    })
    
  } catch (error) {
    
  }
}
privatbank(url)

function n1and1(euro) {
  const content = document.querySelector(".n1and1")
  const content2 = document.querySelector(".n1and2")
  const content3 = document.querySelector(".n1and3")
  const content4 = document.querySelector(".n1and4")
  content.innerHTML = euro[0];
  content2.innerHTML = euro[1];
  content3.innerHTML = euro[2];
  content4.innerHTML = euro[3];
}

function n2and1(euro) {
  const content = document.querySelector(".n2and1")
  const content2 = document.querySelector(".n2and2")
  const content3 = document.querySelector(".n2and3")
  const content4 = document.querySelector(".n2and4")
  content.innerHTML = euro[0];
  content2.innerHTML = euro[1];
  content3.innerHTML = euro[2];
  content4.innerHTML = euro[3];
}
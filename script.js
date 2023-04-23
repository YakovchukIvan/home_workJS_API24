"use strict"

const url = "https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014";
const usd1 = document.querySelector(".usd1")
const usd2 = document.querySelector(".usd2")

const eur1 = document.querySelector(".eur1")
const eur2 = document.querySelector(".eur2")

// const input__valute = document.querySelector(".input__valute")
// const item__eur = document.querySelector(".item__option-eur")
// const item__usd = document.querySelector(".item__option-usd")
// const btn__convertor = document.querySelector(".btn__convertor")
// const out__valute = document.querySelector(".out__valute")
// const list__Option = document.querySelector(".list__valute-option")

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

    n1and1(eur.currency) // eur
    n1and2(eur.baseCurrency) // UAH
    n1and3(eur.purchaseRate) // купляємо
    n1and4(eur.saleRate) // продаємо

    n2and1(usd.currency)
    n2and2(usd.baseCurrency)
    n2and3(usd.purchaseRate)
    n2and4(usd.saleRate)

    // btn__convertor.addEventListener("click", () => {
    // const selectedOption = list__Option.value;
    //   if (list__Option.value === "eur") {

    //     // console.log('selectedOption: ', selectedOption);// для перевірки
    //     // console.log("Працює перший чек");// для перевірки
    //     const result = parseInt(input__valute.value) * eur.buy;
    //     // console.log('result: ', result); // для перевірки
    //     out__valute.textContent = result + " €";
    //     input__valute.value = "";
    //   } else if (list__Option.value === "usd") {
    //     // console.log('selectedOption: ', selectedOption);// для перевірки
    //     // console.log("Працює другий чек");// для перевірки
    //     const result = parseInt(input__valute.value) * usd.buy;
    //     out__valute.textContent = result + " $";
    //     input__valute.value = "";
    //   } else {console.log("error")}
    // })

  } catch (error) {
    
  }
}
privatbank(url)

function n1and1(usd) {
  const content = document.querySelector(".n1and1")
  content.innerHTML = usd;
}
function n1and2(usd) {
  const content = document.querySelector(".n1and2")
  content.innerHTML = usd;
}
function n1and3(usd) {
  const content = document.querySelector(".n1and3")
  content.innerHTML = usd;
}
function n1and4(usd) {
  const content = document.querySelector(".n1and4")
  content.innerHTML = usd;
}


function n2and1(euro) {
  const content = document.querySelector(".n2and1")
  content.innerHTML = euro;
}
function n2and2(euro) {
  const content = document.querySelector(".n2and2")
  content.innerHTML = euro;
}

function n2and3(euro) {
  const content = document.querySelector(".n2and3")
  content.innerHTML = euro;
}
function n2and4(euro) {
  const content = document.querySelector(".n2and4")
  content.innerHTML = euro;
}


function buyUSD(){
  const num = document.querySelector(".inputBUY").value
  const val = document.querySelector(".n1and3").innerHTML
  const par = document.querySelector(".icvelsBUY")
  const result = Number(num) * Number(val)
  par.innerHTML = result.toFixed(2) + " UAN"
}
function buyEUR(){
  const num = document.querySelector(".inputBUY").value
  const val = document.querySelector(".n2and3").innerHTML
  const par = document.querySelector(".icvelsBUY")
  const result = Number(num) * Number(val)
  par.innerHTML = result.toFixed(2) + " UAN"
}


function saleUSD(){
  const num = document.querySelector(".inputSALE").value
  const val = document.querySelector(".n1and4").innerHTML
  const par = document.querySelector(".icvelsSELE")
  const result = Number(num) * Number(val)
  par.innerHTML = result.toFixed(2) + " UAN"
}
function saleEUR(){
  const num = document.querySelector(".inputSALE").value
  const val = document.querySelector(".n2and4").innerHTML
  const par = document.querySelector(".icvelsSELE")
  const result = Number(num) * Number(val)
  par.innerHTML = result.toFixed(2) + " UAN"
}


const convertButton = document.querySelector(".convert-button")
const currencySelection = document.querySelector(".currency-selection")
const currencyThe = document.querySelector(".currency-the")

async function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-value")
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const wonsToday = 0.0043
    const realToday = 1


    if (currencySelection.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }        
    
    if (currencySelection.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelection.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GPB",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelection.value == "wons") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW",
        }).format(inputCurrencyValue / wonsToday)
    }

    if (currencySelection.value == "real") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday)
    }  

    
    
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
           style: "currency",
           currency: "BRL",
        }).format(inputCurrencyValue)}
        

 async function changeCurrency() {

    const currencyName = document.querySelector ("#currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelection.value == "dolar"){
        currencyName.innerHTML = "dólar Americano"
        currencyImg.src = "./assets/USA.png"
    
    }
    if (currencySelection.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelection.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png"
    }

    if (currencySelection.value == "wons"){
        currencyName.innerHTML = "Wons Sul-coreano"
        currencyImg.src = "./assets/coreia.sul.jpg"
    }

    if (currencySelection.value == "real"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImg.src = "./assets/brasil 2.png"
    }

    convertValues()
}

 function changeCurrencyThe(){

    const currencyNameThe = document.querySelector ("#currency-top")
    const currencyImgThe = document.querySelector(".currency-top-img")

    if (currencyThe.value == "dolar-top"){
        currencyNameThe.innerHTML = "dólar americano"
        currencyImgThe.src = "./assets/USA.png"
    
    }
    if (currencyThe.value == "euro-top"){
        currencyNameThe.innerHTML = "Euro"
        currencyImgThe.src = "./assets/euro.png"
    }

    if (currencyThe.value == "libra-top"){
        currencyNameThe.innerHTML = "Libra"
        currencyImgThe.src = "./assets/libra 1.png"
    }

    if (currencyThe.value == "wons-top"){
        currencyNameThe.innerHTML = "Wons Sul-coreano"
        currencyImgThe.src = "./assets/coreia.sul.jpg"
    }

    if (currencyThe.value == "real-top"){
        currencyNameThe.innerHTML = "Real brasileiro"
        currencyImgThe.src = "./assets/brasil 2.png"
    }
    convertValues()
 }


currencyThe.addEventListener("change", changeCurrencyThe)
currencySelection.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
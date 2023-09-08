const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-convert")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.14
    const bitcoinToday = 0.0000075
    const realToday = 1.0
// 
    // if(currencyConvert.value == "dolar" && currencySelect.value =="real") {
        // currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            // style: "currency",
            // currency: "BRL"
        // }).format(inputCurrencyValue * dolarToday)
    // }

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }  

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
     
   
    if (currencyConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue / realToday)
    }
   
    
    if (currencyConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }
   
    
    if (currencyConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }
   
   
    if (currencyConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }
   
   
    if (currencyConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue / euroToday)
    }
   
   
    
}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
        
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }


    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


function changeCurrencyConvert() {
    const currencyNameConvert = document.getElementById("currency-name-convert")
    const currencyImgConvert = document.querySelector(".currency-img-convert")

    if (currencyConvert.value == "real") {
        currencyNameConvert.innerHTML = "Real Brasileiro"
        currencyImgConvert.src = "./assets/real.png"
    }

    if (currencyConvert.value == "dolar") {
        currencyNameConvert.innerHTML = "Dolar americano"
        currencyImgConvert.src = "./assets/dolar.png"
    }

    if (currencyConvert.value == "euro") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImgConvert.src = "./assets/euro.png"
    }

    if (currencyConvert.value == "libra") {
        currencyNameConvert.innerHTML = "Libra Esterlina"
        currencyImgConvert.src = "./assets/libra.png"
    }

    if (currencyConvert.value == "bitcoin") {
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImgConvert.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencyConvert.addEventListener("change", changeCurrencyConvert)
convertButton.addEventListener("click", convertValues)
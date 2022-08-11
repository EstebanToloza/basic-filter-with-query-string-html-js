let inputAirportValue = document.getElementById("custom__pickUpPlace");
inputAirportValue.addEventListener('change', updateUrl)

let inputDestinationValue = document.getElementById("custom__destination");
inputDestinationValue.addEventListener('change', updateUrl)

let inputPassengersValue = document.getElementById("custom__passengers")
inputPassengersValue.addEventListener('change', updateUrl)

let custom__button = document.getElementById("custom__button");
custom__button.addEventListener('click', displayError)

let showErrorMessage = document.getElementById("custom__error-message")

function displayError() {
    if(inputAirportValue.value === "null" || inputDestinationValue.value === "null" || inputPassengersValue.value === "null") {
        custom__button.disabled = true
        showErrorMessage.style.display = "block"
    } else {
        inputAirportValue.value = "null";
        inputDestinationValue.value = "null";
        inputPassengersValue.value = "null"
        return
    }
}


function updateUrl() {
    
    if(inputAirportValue.value === "null" || inputDestinationValue.value === "null" || inputPassengersValue.value === "null") {
        return
    } else {
        let airportValue = inputAirportValue.value;
        let destinationValue = inputDestinationValue.value;
        let buttonContainer = document.getElementById("buttonContainer")

        let custom__url = `https://yoururlhere/product-category/${destinationValue}/?product_tag=${airportValue}`
        buttonContainer.href = custom__url
        custom__button.disabled = false
        showErrorMessage.style.display = "none"
    }
}
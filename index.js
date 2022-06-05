let number = 20;
const conversionEle = document.querySelector("#conversion-ele")
conversionEle.textContent = number 


const lengthConversion = document.querySelector("#length-ele")
lengthConversion.textContent = `${number} meters = ${(number * 3.28).toFixed(3)} feet | ${number} feet = ${(number * 0.3048).toFixed(3)} meters`

const volumeConversion = document.querySelector("#volume-ele")
volumeConversion.textContent = `${20} liters = ${(number * 0.264172).toFixed(3)} gallons | ${number} gallons = ${(number * 3.78541).toFixed(3)} liters`

const massConversion = document.querySelector("#mass-ele")
massConversion.textContent = `${20} kilos = ${(number * 2.2).toFixed(3)} pounds | ${number} pounds = ${(number * 0.454).toFixed(3)} kilos`
// Static exchange rates (example only; real rates change)
const exchangeRates = {
  USD: { USD: 1, INR: 83.12, EUR: 0.92, GBP: 0.79 },
  INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0095 },
  EUR: { USD: 1.09, INR: 90.34, EUR: 1, GBP: 0.86 },
  GBP: { USD: 1.27, INR: 105.1, EUR: 1.16, GBP: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = amount * rate;

  resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// https://calculator.swiftutors.com/equity-multiplier-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const equityMultiplierRadio = document.getElementById('equityMultiplierRadio');
const totalAssetsRadio = document.getElementById('totalAssetsRadio');
const StockholdersEquityRadio = document.getElementById('StockholdersEquityRadio');

let equityMultiplier;
let totalAssets = v1;
let StockholdersEquity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

equityMultiplierRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Assets ($)';
  variable2.textContent = 'Stockholder\'s Equity ($)';
  totalAssets = v1;
  StockholdersEquity = v2;
  result.textContent = '';
});

totalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity Multiplier';
  variable2.textContent = 'Stockholder\'s Equity ($)';
  equityMultiplier = v1;
  StockholdersEquity = v2;
  result.textContent = '';
});

StockholdersEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity Multiplier';
  variable2.textContent = 'Total Assets ($)';
  equityMultiplier = v1;
  totalAssets = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(equityMultiplierRadio.checked)
    result.textContent = `Equity Multiplier = ${computeEquityMultiplier().toFixed(2)}`;

  else if(totalAssetsRadio.checked)
    result.textContent = `Total Assets = ${computeTotalAssets().toFixed(2)} $`;

  else if(StockholdersEquityRadio.checked)
    result.textContent = `Stockholder's Equity = ${computeStockholdersEquity().toFixed(2)} $`;
})

// calculation

function computeEquityMultiplier() {
  return Number(totalAssets.value) / Number(StockholdersEquity.value);
}

function computeTotalAssets() {
  return Number(equityMultiplier.value) * Number(StockholdersEquity.value);
}

function computeStockholdersEquity() {
  return Number(totalAssets.value) / Number(equityMultiplier.value);
}
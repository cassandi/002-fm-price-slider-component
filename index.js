function onPriceChanged() {
  const PRICING = {
    1: {
      cost: 8,
      pageViews: '10K'
    },
    2: {
      cost: 12,
      pageViews: '50K'
    },
    3: {
      cost: 16,
      pageViews: '100K'
    },
    4: {
      cost: 24,
      pageViews: '500K'
    },
    5: {
      cost: 36,
      pageViews: '1M'
    },
  }

  let priceInput = document.getElementsByClassName('slider--input')[0];
  let priceOutput = document.getElementsByClassName('slider--price-value')[0];
  let toggleInput = document.getElementsByClassName('toggle--checkbox')[0];
  let pageViewsOutput = document.getElementsByClassName('slider--views-output')[0].value;

  if (toggleInput.checked) {
    priceOutput.value = 0.75 * PRICING[priceInput.value].cost;
  } else {
    priceOutput.value = PRICING[priceInput.value].cost
  };

  pageViewsOutput.value = PRICING[priceInput.value].pageViews;
}

function onBillingChanged() {
  const CYCLES = {
    YEAR: 'year',
    MONTH: 'month'
  }
  
  let toggleInput = document.getElementsByClassName('toggle--checkbox')[0];
  let toggleOutput = document.getElementsByClassName('slider--billing-output')[0];

  if (toggleInput.checked) {
    toggleOutput.innerText = CYCLES.YEAR;
  } else {
    toggleOutput.innerText = CYCLES.MONTH;
  }

  this.onPriceChanged();
}
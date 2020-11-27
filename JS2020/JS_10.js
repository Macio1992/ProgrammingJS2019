function profit(info) {
	return Math.round((info.sellPrice - info.costPrice) * info.inventory);
}


console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
  }))
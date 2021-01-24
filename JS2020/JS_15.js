function freeShipping(order) {
    const values = Object.values(order);
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum > 50;
}

freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });
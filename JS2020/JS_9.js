function hasKey(obj, key) {
    return obj[key] !== undefined;
}

console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "yes"))
function mostExpensive(obj) {
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    let maxIndex = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] > values[maxIndex]) {
            maxIndex = i;
        }
    }

    return "The most expensive one is the " + keys[maxIndex];
}
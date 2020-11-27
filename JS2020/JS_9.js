function hasKey(obj, key) {
	if (obj[key] !== undefined) {
        return true;
    } else {
        return false;
    }
}

console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"))
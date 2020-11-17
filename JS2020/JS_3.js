function findIndex(arr, str) {
    let index;
	for (let i = 0; i < arr.length; i++) {
        if (str === arr[i]) {
            index = i;
        }
    }
    return index;
}

function findIndexNew(arr, str) {
    let index = arr.findIndex(element => str === element);
	return index;
}
function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}


console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))
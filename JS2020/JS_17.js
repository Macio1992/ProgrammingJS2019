function mapping(letters) {
    const lettersObj = {};

    for (let i = 0; i < letters.length; i++) {
        lettersObj[letters[i]]  = letters[i].toUpperCase();
    }

    return lettersObj
}


console.log(mapping(["p", "s"]))
mapping(["a", "b", "c"])
mapping(["a", "v", "y", "z"])
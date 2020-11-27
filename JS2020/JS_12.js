function countAll(str) {
    const strSpaceless = str.replace(" ","");
    let numbers = 0;
    let letters = 0;
    for (let i = 0; i<strSpaceless.length; i++) {
        if (isNaN(strSpaceless[i])) {
            letters++;
        } else {
            numbers++;
        }
    }
    return {
        LETTERS : letters,
        DIGITS : numbers
    }
}




console.log(countAll("H3ll0 World"))
function charCount(myChar, str) {
    let counter = 0;
	for (let i = 0; i<str.length; i++) {
        if (str[i] === myChar) {
            counter++;
        }
    }
    return counter;
}
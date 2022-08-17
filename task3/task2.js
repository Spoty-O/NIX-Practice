function testString(str) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    let arr = [];
    
    for (ch of str) {
        if ([')', ']', '}'].indexOf(ch) > -1) {
            if (brackets[ch] !== arr.pop()) {
                return false;
            }
        }
        else {
            if (['(', '[', '{'].indexOf(ch) > -1) {
                arr.push(ch);
            }
        }
    }
    return true;
}
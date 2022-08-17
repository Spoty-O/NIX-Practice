function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    if (fillType == 'FILL_RIGHT') {
        input = input.padEnd(fullLen, fillStr);
    }
    if (fillType == 'FILL_LEFT') {
        input = input.padStart(fullLen, fillStr);
    }
    if (fillType == 'FILL_BOTH') {
        let num = (fullLen - input.length) / 2;
        fullLen -= num;
        input = input.padEnd(fullLen, fillStr);
        fullLen += num;
        input = input.padStart(fullLen, fillStr);
    }
    console.log(input);
    return input;
}
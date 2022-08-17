function substrCount(input, needle, offset, length) {
    return input.slice(offset, length).split(needle).length - 1;
}
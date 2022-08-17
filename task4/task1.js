function isPowOfTwo(num) {
    let m = num - 1;
    return (num > 1) && (num & m) == 0;
}
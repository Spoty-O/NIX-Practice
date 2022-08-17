function task4() {
    let reg = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/);
    console.log(reg.test('25-07-2021'));
    console.log(reg.test('25-7-2021'));
    console.log(reg.test('1-1-2021'));
    console.log(reg.test('2-12-1979'));
}

task4();
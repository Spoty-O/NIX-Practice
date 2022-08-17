function task5() {
    let names = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";
    let reg = new RegExp(/(\w+)\,\s(\w+)/g);
    console.log(names.replace(reg, '$2 $1'));
}

task5();
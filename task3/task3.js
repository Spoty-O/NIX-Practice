function circleArray() {
    let arr = [];

    this.add = (str) => {
        arr.push(str);
    }

    this.get = (index) => {
        const n = arr.length;
        return arr[(index % n + n) % n];
    }
}

let circledArray = new circleArray();
circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");
console.log(circledArray.get(4));
console.log(circledArray.get(-1));
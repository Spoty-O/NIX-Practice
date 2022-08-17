find_word = () => {
    let str = 'Ми знаємо, що монохромний колір – це градації сірого.'
    str = str.split(' ');
    for (word of str) {
        if (word.indexOf('хром') > -1) {
            console.log(word);
        }
    }
}

find_word();
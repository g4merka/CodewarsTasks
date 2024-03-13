const solution = (str) => {
    let reversedStrArr = [];
    for (let i = -1; i >= -str.length; i--) {
        reversedStrArr.push(str.at(i));
    }
    return reversedStrArr.join('');
    // console.log(reversedStrArr.join(''));
}
// solution('world'); //dlrow
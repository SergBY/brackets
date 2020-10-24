module.exports = function check(str, bracketsConfig) {
    // your solution
    let newBrConf = bracketsConfig.join('').split(',').join('');
    let newStr = str.split('');

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i + 1] === newBrConf[newBrConf.indexOf(newStr[i]) + 1]) {
            newStr.splice(i, 2);
            i = -1;
            if (newStr.length === 0) {
                return true;
            }
            continue;
        }
        continue;
    }
    return false;
};


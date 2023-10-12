const removeFromArray = function(array, ...Args) {
    for(let arg in Args) {
        let index = array.indexOf(Args[arg]);

        if(index > -1) {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

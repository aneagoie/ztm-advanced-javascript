// Exercise 4
function bigBrother() {
    function littleBrother() {
        return 'it is me!';
    }
    return littleBrother();

    function littleBrother() {
        return 'no me!';
    }
}

console.log(bigBrother()); // What will be returned here?
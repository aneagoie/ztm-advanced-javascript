//side effects

const array = [1, 2, 3];
function mutateArray(arr) {
    arr.pop()
}

function mutateArray2(arr) {
    arr.forEach(element => {
        arr.push(element)
    });
}
mutateArray(array);
mutateArray2(array);
console.log(array);




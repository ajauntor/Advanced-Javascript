function stopWatch(){
    let count = 0;

    return function(){
        count++;
        return count;

    }
}
const clockOne = stopWatch();
console.log(clockOne());
console.log(clockOne());
console.log(clockOne());
console.log(clockOne());

// const clockTwo = stopWatch();
// console.log(clockTwo());
// console.log(clockTwo());
// console.log(clockOne());
// console.log(clockTwo());

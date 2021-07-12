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

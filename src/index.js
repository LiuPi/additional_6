
function factorTwo(n) {
    let f2 = 0;
    for (let d = 2; d <= n; d *= 2)
        f2 += Math.floor(n/d);
    return f2;
}

function factorFive(n) {
    let f5 = 0;
    for (let d = 5; d <= n; d *= 5)
        f5 += Math.floor(n/d);
    return f5;
}

function factors(arr) {
    let factorsTwo = 0;
    let factorsFive = 0;
    let n=0;
    for(let i = 0; i < arr.length; i++){
        n = arr[i].match(/\d+/g).map(Number);
        if (arr[i].match(/!/g).length == 1) {
            factorsTwo += factorTwo(n);
            factorsFive += factorFive(n);
        } else {
            if (n % 2 == 0){
                factorsTwo += (n/2+factorTwo(n/2));
                factorsFive += factorFive(n/2);
            } else {
                factorsTwo += (factorTwo(n) - Math.floor(n/2) - factorTwo((n)/2));
                factorsFive += (factorFive(n) - factorFive((n)/2));
            }
        }
    }
    return Math.min(factorsTwo,factorsFive);
}

module.exports = function zeros(expression) {
    let fact = expression.split("*");
    return factors(fact);
};

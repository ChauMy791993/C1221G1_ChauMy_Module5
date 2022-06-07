let n1: number = 0;
let n2: number = 1;
let total: number;
let list = "";
let tong :number= 0;
for (let i = 1; i <= 20; i++) {
    total = n1 + n2;
    n1 = n2;
    n2 = total;
    list += +n1 + ",";
    tong += n1;
}
console.log(list)
console.log(tong);
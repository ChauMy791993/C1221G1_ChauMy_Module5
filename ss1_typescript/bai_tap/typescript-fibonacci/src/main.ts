let n1: number = 0;
let n2: number = 1;
let n3: number;
let list: number[] = [];
let sum: number = 0;

function fibonacci(total: number, count: number): Array<number> {
    if (count < total) {
        if (count <= 1) {
            n3 = count;
        } else {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
        count++;
        list.push(n3);
        fibonacci(total,count);
    }else {
        return list;
    }
}
fibonacci(10,0)

for (let number of list){
    sum += number;
}

console.log(list);
console.log(sum);

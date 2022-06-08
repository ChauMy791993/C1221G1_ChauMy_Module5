let n1: number = 0;
let n2: number = 1;
let n3: number;
let list:Array<number>=[];
let sum :number= 0;
function fibonacci(num:number) :void {
    let size = num
    if (size > 0){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        list.push(n1);
        sum += n1;
    }


    console.log(list);
    console.log(sum);
}

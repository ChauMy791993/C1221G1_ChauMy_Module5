function fibonacci(num:number) :void {
    let n1: number = 0;
    let n2: number = 1;
    let n3: number;
    let list:Array<number>=[];
    let tong :number= 0;
    for (let i = 1; i <= num; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        list.push(n1);
        tong += n1;
    }
    console.log(list);
    console.log(tong);
}
fibonacci(20);
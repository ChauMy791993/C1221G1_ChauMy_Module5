function fibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var n3;
    var list = [];
    var tong = 0;
    for (var i = 1; i <= num; i++) {
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

var price = 120000000;
var hope = '1acs';
// yêu cầu: chuyển thành chuỗi theo cú pháp sau: 12,000,000


var price2 = price.toString();
var kq = '';
for (var index = price2.length; index >= 0; index--) {
    var element = price2[index];
    
    if (index % 3 === 0){
        element += ',';
    }
    kq += element;
}
var kq2 = '';
for (var index = kq.length - 1; index >= 0; index--){
    kq2 += kq[index];
}
console.log(kq2);

//console.log(parseInt(kq));

/* 
var price2 = price.toString();
var kq = '';
for (var index = 0; index < price2.length; index++) {
    var element = price2[index];
    var a = '';
    for (var j = price2.length; j >= 0; j--){
        if (j % 3 === 0){
            a += ',';
        }
    }
    kq += element;
}
*/
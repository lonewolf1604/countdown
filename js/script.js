var customerLists = [
    'Tạ Hoàng An',
    'Nguyễn Văn Tâm',
    'Trương Văn Duy',
    'Nguyễn Văn Tâm',
    'Bùi Hưởng'
]

if (customerLists.length){
    var duplicateArr = [];
    var a, b;

    for (var i = 0 ; i < customerLists.length; i++){
        a = customerLists[i];
        //console.log(a);
        for(var j = customerLists.length - 1; j >= 0 ; j--){
            b = customerLists[j];
            //console.log(b);
            if(a === b){
                duplicateArr.push(j);
            }
            //kq += b;  
        }
    }
    console.log(duplicateArr);
    
    if (duplicateArr.length > 0){
        duplicateArr.forEach(function(item){
            customerLists[item] = null;
        });
    }
    console.log(customerLists);
}

/*
Hiển thị lời chào thời gian hiện tại
Thứ sáu, ngày 08 tháng 04 năm 2022, 21 giờ 24 phút, 30 giây
*/

var dayArr = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
];

setInterval(function(){
    var now = new Date();
    var nextDay = now.getDate();
    

    var result = 'Hôm nay là ' + dayArr[now.getDay()] + ', ngày ' + now.getDate() + ' tháng ' + (now.getMonth()+1) + ' năm ' + now.getFullYear() + ' | ' + now.getHours() + ' Giờ ' + now.getMinutes() + ' phút ' + now.getSeconds() + ' Giây';

    //console.log(result);

    document.getElementById('date').innerHTML = result;
}, 1000);

setInterval(function(){
    var now = new Date();
    var countdownDate = now.getDate() - now.getDate();
    var countdownHours = 23 - now.getHours();
    var countdownMinutes = 59 - now.getMinutes();
    var countdownSeconds = 60 - now.getSeconds();
    var result = `Còn lại <span> ${countdownDate} ngày </span> 
                            <span> ${countdownHours} giờ </span>
                            <span>${countdownMinutes} phút </span>
                            <span>${countdownSeconds} giây </span>`;
    //console.log(countdownSeconds);
    document.getElementById('countdown').innerHTML = result;
}, 1000);


/* setInterval(function(){
    var now = new Date();
    
    var result = 'Hôm nay là ' + dayArr[now.getDay()] + ', ngày ' + now.getDate() + ' tháng ' + (now.getMonth()+1) + ' năm ' + now.getFullYear() + ' | ' + now.getHours() + ' Giờ ' + now.getMinutes() + ' phút ' + now.getSeconds() + ' Giây';

    //console.log(result);

    document.getElementById('date').innerHTML = result;
}, 1000);
 */
function forDate(inputTime, way) {
	if(inputTime == null || inputTime ==  ''){
		return "";
	}
	var date = new Date(inputTime);
	var y = date.getFullYear();  
	var m = date.getMonth() + 1;  
	m = m < 10 ? ('0' + m) : m;  
	var d = date.getDate();  
	d = d < 10 ? ('0' + d) : d;  
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;  
	second = second < 10 ? ('0' + second) : second; 
	
	return "" + y + m + d + h + minute + second;
	
	// way = way || 1;
	// // way == 1  年月日
	// if(way === 1) {
	// 	return y + '-' + m + '-' + d;  
	// }
	// // way == 1  年月日时分秒 
	// if(way === 2){
	// 	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;  
	// }
	// way == 具体格式   标准格式: yyyy-MM-dd HH:mm:ss
	// if(typeof way == 'string') {
	// 	return way.replace("yyyy", y).replace("MM", m).replace("dd", d).replace("HH", h).replace("mm", minute).replace("ss", second);
	// }
	// return y + '-' + m + '-' + d;  
};
function getSJC(startTime, endTime) {
	
	// startTime = forDate(startTime, 'yyyyMMddHHmmss');
	// endTime = forDate(endTime, 'yyyyMMddHHmmss');
	
	// if(startTime.length < 14 || endTime.length < 14) {
	// 	alert('时间格式不正确');
	// 	return;
	// }

	// var startArr = [startTime.substring(0, 4), startTime.substring(4, 6), startTime.substring(6, 8), startTime.substring(8, 10), startTime.substring(10, 12), startTime.substring(12, 14)];//切分开始时间为数组
	// var endArr = [endTime.substring(0, 4), endTime.substring(4, 6), endTime.substring(6, 8), endTime.substring(8, 10), endTime.substring(10, 12), endTime.substring(12, 14)];//切分结束时间为数组
	// var dateStart = new Date(startArr[0], startArr[1], startArr[2], startArr[3], startArr[4], startArr[5]);//采用new Date(yyyy,mth,dd,hh,mm,ss);创建方式分别传入年月日时分秒
	// var dateEnd = new Date(endArr[0], endArr[1], endArr[2], endArr[3], endArr[4], endArr[5]);
	
	var dateStart = startTime;
	var dateEnd = endTime;
	
	var dateInterval = dateEnd.getTime() - dateStart.getTime() //获取时间差毫秒
	//计算出相差天数
	var days = Math.floor(dateInterval / (24 * 60 * 60 * 1000));
	//计算小时数
	var hourLevel = dateInterval % (24 * 60 * 60 * 1000);
	var hours = Math.floor(hourLevel / (60 * 60 * 1000))
	//计算分钟数
	var minutesLevel = hourLevel % (60 * 60 * 1000);
	var minutes = Math.floor(minutesLevel / (60 * 1000));
	//计算秒数
	var seconds = Math.round((minutesLevel % (60 * 1000)) / 1000);
	return days + '天 ' + hours + '小时 ' + minutes + '分 ' + seconds + '秒';
	// alert('天数 ' + days + ' 小时数 ' + hours + ' 分钟数 ' + minutes + ' 秒数 ' + seconds)
}

function p(name, defaultValue){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == name){return pair[1];}
	}
	return(defaultValue == undefined ? null : defaultValue);
}
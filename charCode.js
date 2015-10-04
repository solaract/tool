var str = "PPGS{Ernql_Tb?}"
var new_arr = [];
var reg = /[A-Za-z]/;
for(var i = 0,len = str.length;i<len;i++){
	var code = str.charCodeAt(i);
	console.log(code);
	var k = unescape('%u'+('00'+(code-13).toString(16)).slice(-4));
	if(k.search(reg)!==-1){
		new_arr[i] = k;
	}
	else{
		new_arr[i] = unescape('%u'+('00'+(code+13).toString(16)).slice(-4));
	}
}
new_str = new_arr.join('');
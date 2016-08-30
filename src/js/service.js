angular.module("app").service("apiService",function($rootScope,$http,$location){

	this.getData = function(url , data ,method){
		method = method.toUpperCase();
		var str = "";
		var arr = [];
		for(i in data){
			str+=i+"="+data[i];
			arr.push(str);
		}
		data = arr.join("&");
		//请求
		if(method = "GET"){
			return $http.get(url+"?"+data);
		}
		else{
			return $htto.post(url+"?"+data);
		}
	}
})



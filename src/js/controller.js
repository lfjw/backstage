angular.module("app")
			//登录
		.controller("login",function($rootScope,$scope,$state,$http,apiService,$location){

		  //调用apiService的getData方法
			/*var obj=apiService.getData("data/admin.json",{},"get");
				obj.success(function(res){
					$scope.res=res;
					console.log($scope)
				})*/
			$http({
				url:"data/admin.json",
				//url:"127.0.0.1:3066",
				method:"GET"
			}).success(function(data){
				//console.log(data)
				var n=[],p=[];  
				for (var i = 0; i<data.length; i++){
					n.push(data[i].name);
					p.push(data[i].password);
				}
				$scope.centerBtn = function(){	
					if($scope.txt == undefined){
						alert("账户不能为空");
						return;
					}else if( n.indexOf($scope.txt) == -1){
						alert("账户不正确");
						return;
					}else if( n.indexOf($scope.txt) != -1 && $scope.pas == undefined){
						alert("密码不能为空");
						return;
					}else if( n.indexOf($scope.txt) != -1 && p.indexOf($scope.pas) == -1){
						alert("密码输入不正确");
						return
					}else if( n.indexOf($scope.txt) != -1 && p.indexOf($scope.pas) != -1){
						alert("输入正确，欢迎使用");
						$state.go('index');
					}
				}
				
			})
			
		})
		//
		.controller("indexCtrl",function($scope,$rootScope,apiService,$location,$http){
				
				apiService.getData("data/index.json",{},"get")
					  .success(function(res){
					  	   $scope.res = res;
					  	   //console.log(res.things)
					  })
				$scope.navBar=true;
				//点击导航按钮
				$scope.clickNavButton=function(){
					$scope.navBtn=!$scope.navBtn;
					
				}
				//点击左侧导航菜单,切换背景样式
				/*$scope.nav=[
							{name:"首页",href:"collapseOne", addBg:true, icon:"glyphicon-home" ,menu:["公司简介","公司管理"]},
							{name:"公司业务",href:"collapseTwo", addBg:false, icon:"glyphicon-stats" ,menu:["主要业务","业务架构"]},
							{name:"企业文化",href:"collapseThree", addBg:false, icon:"glyphicon-stats" ,menu:["品牌标识","价值观"]},
							{name:"会员管理",href:"collapseFour", addBg:false, icon:"glyphicon-stats" ,menu:["商家管理","用户管理"]}
						]*/
				

				
			
		})
		//公司管理
		.controller("index2Ctrl",function($scope,$rootScope,apiService,$location,$http){
			apiService.getData("data/company.json",{},"get")
					  .success(function(res){
					  	   $scope.res = res;
					  	  //console.log(res)
					  })
		})


		//主要业务
		
		.controller('uiElement', function($rootScope,$scope,$state,$http,apiService,$location) {
    
	       // 调用apiService的getData方法
	           var obj = apiService.getData("data/business.json",{},"get");
                   obj.success(function(res){
                       $scope.res=res;
                       //console.log($scope.res);
                       
                   })
                   
		})
		
		 //业务架构
		.controller("listCtrl",function($rootScope,$scope,$state,$http,apiService,$location){
			//访问状态
			$scope.data={
				
				"x":["Only Visited","Purchased","Bounced"],//注释
				"val":["320","570","250"],//数据值
				"color":["#242a30","#00b8ce","orange"]//颜色

			}
			$.pieChart({
				cvsId:"doughnutChart",
				data:$scope.data
			})
			//税收
			$.drawLine({
				cvsId:"Revenue",
				lineColor:"#fff",
				cvsW:"1000",//画布宽高
			    cvsH:"400",
				paddingX:50,//x轴间距
				paddingY:50,//y轴间距
				x:["Jan01","Jan02","Jan3","Jan4","Jan5","Jan6","Jan7","Jan8","Jan9","Jan10","Jan11","Jan12"],
				y:["0","500","1000","1500","2000","2500","3000"],
				val:[//折线图以坐标轴为原点为参考点的数据
						[00,500],
						[50,500],
						[100,2000],
						[150,1500],
						[200,3000],
						[250,2000],
						[300,2000],
						[350,1500],
						[400,3000],
						[450,2000],
						[500,500],
						[550,1500]
					]
			

			})
			//月销售量
			$.drawLine({
				cvsId:"cvs",
				bgColor:"#242a30",//背景颜色
				lineColor:"#00b8ce",//折线颜色
				cirColor:"#00b8ce",//圆圈颜色
				axisColor:"#000",
				textColor:"#999",
				fillColor:"transparent",//填充颜色
				cvsW:"700",//画布宽高
			    cvsH:"400",
			    paddingX:50,//x轴间距
			    x:["01月","02月","03月","04月","05月","06月","07月","08月","09月","10月","11月","12月"],
			    val:[//折线图以坐标轴为原点为参考点的数据
						[00,500],
						[50,500],
						[100,2000],
						[150,1500],
						[200,3000],
						[250,2000],
						[300,2000],
						[350,1500],
						[400,3000],
						[450,2000],
						[500,500],
						[550,1500]

						
					]

			});
			$scope.title="点击展开";
			$scope.text = "这是内容";
			$scope.list = [1111111,222222222,33333333,44444444,555555555555];
			$scope.changeStatus = function(index){

			    $scope.selected = index;
			}

			 var obj1 = apiService.getData("data/company.json",{},"get");
	     
                obj1.success(function(val){
                   $scope.val=val;
                   //console.log(val.performance);
                   
               })
		})
		 //企业文化
		.controller("formsCtrl",function($rootScope,$scope,$state,$http,apiService,$location){
			var obj = apiService.getData("data/culture.json",{},"get");
			    obj.success(function(res){
					$scope.res = res;
					//console.log($scope.res)
					 
			})
				
			
		})
		.controller("honorCtrl",function($rootScope,$scope,$state,$http,apiService,$location){
			var obj = apiService.getData("data/honor.json",{},"get")
				obj.success(function(res){
					$scope.res = res;
				})
		})
		//商家管理
		.controller("tables",function($rootScope,$scope,$state,$http,apiService,$location){
			var obj1 = apiService.getData("data/userInfo.json",{},"get");  //第二个是给后台传的数据
			    obj1.success(function(e){
			    	$scope.e = e;
			    	//console.log(e);
			 })
		})
		//用户管理
		.controller("uservip",function($rootScope,$scope,$state,$http,apiService,$location){
			var obj2 = apiService.getData("data/merchant.json",{},"get");  //第二个是给后台传的数据
			    obj2.success(function(j){
			    	$scope.j = j;
			    	//console.log(j);
			 })
		})

		
		
   

     
		

		


		
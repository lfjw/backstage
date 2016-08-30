angular.module("app").config(config);

function config($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/login");
	$stateProvider
				.state("login",{//登录
					url:"/login",
					templateUrl:"views/login.html",
					/*resolve:{
						loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
			                return $ocLazyLoad.load(
			                	[
			                		'bower_components/bootstrap/dist/css/bootstrap.min.css',
			                		"src/css/login.css"
			                	]);
			            }]
					}*/

					resolve:{
						loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
			                return $ocLazyLoad.load(
			                	[
			                		'bootstrap/dist/css/bootstrap.min.css',
			                		"css/bulid/style.min.css"
			                	]);
			            }]
					}

				})
				.state("index",{//公司简介
					url:"/index",
					templateUrl:"views/index1.html"/*,
					resolve:{
						loadMyCtrl:["$ocLazyLoad",function($ocLazyLoad){
							return $ocLazyLoad.load([
									'bower_components/bootstrap/dist/css/bootstrap.min.css',
									'src/css/index.css',
									'src/css/index1.css'
								])
						}]
					}*/,
					resolve:{
						loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
			                return $ocLazyLoad.load(
			                	[
			                		'bootstrap/dist/css/bootstrap.min.css',
			                		"css/bulid/style.min.css"
			                	]);
			            }]
					}
					
				})
				.state("index.manage",{//公司管理
					url:"/manage",
					templateUrl:"views/index2.html"/*,
					resolve:{
						loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
							return $ocLazyLoad.load([
									'bower_components/bootstrap/dist/css/bootstrap.min.css',
									'src/css/index.css',
									'src/css/index2.css'
								])
						}]
					}*/

				})
				
				.state("index.ui_element",{//主要业务
					url:"/ui_element",
					templateUrl:"views/ui_element.html"/*,
					resolve:{
						loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
							return $ocLazyLoad.load([
									'bower_components/bootstrap/dist/css/bootstrap.min.css',
									'src/css/ui_element.css'
								])
						}]
					}*/
				})
				.state("index.list",{//业务架构
					url:"/list",
					templateUrl:"views/list.html"/*,
					resolve:{
						loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
							return $ocLazyLoad.load([
									'bower_components/bootstrap/dist/css/bootstrap.min.css',
									'src/css/list.css'
								])
						}]
					}*/
					

				})
				.state("index.form",{//企业文化
					url:"/form",
					templateUrl:"views/forms.html"
					
					

				})
				.state("index.honor",{//企业荣誉
					url:"/honor",
					templateUrl:"views/honor.html"
				})
				.state("index.tables",{//商家管理
					url:"/tables",
					templateUrl:"views/tables.html"/*,
					resolve:{
						loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
							return $ocLazyLoad.load([
									'bower_components/bootstrap/dist/css/bootstrap.min.css'
									
								])
						}]
					}*/
				})
				.state("index.user",{//淘宝用户管理
					url:"/user",
					templateUrl:"views/user.html"
				})
}
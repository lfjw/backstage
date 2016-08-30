
/*.directive('expander',function(){
			return {
				restrict:"AE",
				replace:true,
				transclude:true,
				scope:{
					title:'=expanderTitle'
				},
				template:'<div>'
							+'<div class="titel" ng-click="toggle()">{{title}}</div>'
							+'<div class="body" ng-show="showMe" ng-transclude></div>'
						 +'</div>',
				link:function(scope,element,attrs){
					scope.showMe = false;
					scope.toggle = function(){
						scope.showMe=!scope.showMe;
					}
				}
			}
		})*/

    angular.module("app")
			.directive("colorBox",colorBox)
			.directive("direcNav",direcNav)
	        .directive("direcUl",direcUl)
	        .directive("direcForm",direcForm)
	        .directive("createDom",createDom)
	        
	//indexCtrl颜色面板
    function colorBox(){
    	return{
    		restrict:"AE",
    		template:'<span id="setBtn"><i class="glyphicon glyphicon-cog"></i></span>'
						+'<ul id="colorPanel" >'
						    +'<li style="background:#333" data-color="#333"></li>'
							+'<li style="background:orange" data-color="orange"></li>'
							+'<li style="background:#000" data-color="#000"></li>'	
							+'<li style="background:#348fe2 " data-color="#348fe2 "></li>'	
						+'</ul>',
			link:function(scope,ele,attrs){
				
				$(ele).find("#setBtn").on("click",function(){

					$(this).toggleClass("on")
					if($(this).hasClass("on")){
						$(ele).css({"right":0,"-webkit-transition":"right .3s"})
					}
					else{
						$(ele).css({"right":"-300px","-webkit-transition":"right .3s"})
					}
				})
				$(ele).on("click","li",function(){
					//console.log()

					$("body").css("background",$(this).data("color"))
					//$(".panel-heading").css("background",$(this).data("color"))
				})
			}
    	}
    }
    //indexCtrl导航
    function direcNav(){
    	return {
    		restrict:"AE",
    		template:'<div class="panel panel-default">'
					    +'<a class="list-group-item menu1" data-toggle="collapse" data-parent="#accordion" href="javascript:void(0);#collapseOne">'
					    	+'<i class="glyphicon glyphicon-home"></i>首页'						   
						+'</a>'
						+'<div id="collapseOne" class="panel-collapse collapse nav">'
							+'<a ui-sref="index" class="list-group-item active">公司简介</a>'
							+'<a ui-sref="index.manage" class="list-group-item"  >公司管理</a>'							
						+'</div>'
					+'</div>'
					+'<div class="panel panel-default">'
					    +'<a class="list-group-item menu1" data-toggle="collapse" data-parent="#accordion" href="javascript:void(0);#collapseTow">'
					    	+'<i class="glyphicon glyphicon-stats"></i>公司业务'						   
						+'</a>'
						 +'<div id="collapseTow" class="panel-collapse collapse nav">'
							+'<a ui-sref="index.ui_element" class="list-group-item">主要业务</a>'
							+'<a ui-sref="index.list" class="list-group-item"  >业务架构</a>'							
						 +'</div>'
					+'</div>'
					+'<div class="panel panel-default">'
					    +'<a class="list-group-item menu1" data-toggle="collapse" data-parent="#accordion" href="javascript:void(0);#collapseThree">'
					    	+'<i class="glyphicon glyphicon-stats"></i> 企业文化'						  
						+'</a>'
						 +'<div id="collapseThree" class="panel-collapse collapse nav">'
							+'<a ui-sref="index.form" class="list-group-item">品牌标识</a>'
							+'<a ui-sref="index.honor" class="list-group-item">价值观</a>'							
						 +'</div>'
					+'</div>'
					+'<div class="panel panel-default">'
					    +'<a class="list-group-item menu1" data-toggle="collapse" data-parent="#accordion" href="javascript:void(0);#collapseFour">'
					    	+'<i class="glyphicon glyphicon-stats"></i>会员管理'
						+'</a>'
						 +'<div id="collapseFour" class="panel-collapse collapse nav">'
							+'<a ui-sref="index.tables" class="list-group-item">商家管理</a>'
							+'<a ui-sref="index.user" class="list-group-item">用户管理</a>'							
						 +'</div>'
					+'</div>',
    		link:function(scope,ele,attrs){

    			$(ele).on("click",".menu1",function(){
    				//console.log($(this).text())
    				$(this).css("background","#00b8ce")
    						.parent(".panel").siblings(".panel").find(".menu1").css("background","none");
    			})
    			$(ele).find(".nav").on("click","a",function(){
    				//console.log($(this).text())
    				$(this).addClass("active")
    					   .siblings("a").removeClass("active")
    					   .parents(".panel").siblings(".panel").find(".nav").find("a").removeClass("active")
    			})
    		}
    	}
    }
    //formsCtrl品牌标识
	function direcUl(){
		
		return{
			restrict:"AE",
			template:'<li>'
						 +'<a href="javascript:void(0)" >'
						 	+'<span class="glyphicon glyphicon-certificate" style="color:#fff"></span>'
						 +'</a>'
					 +'</li>'
					 +'<li>'
					 	+'<a href="javascript:void(0)" >'
					 		+'<span class="glyphicon glyphicon-random" style="color:#fff"></span>'
					 	+'</a>'
					 +'</li>'
					  +'<li>'
					 	+'<a href="javascript:void(0)" >'
					 		+'<span class="glyphicon glyphicon-chevron-down" style="color:#fff"></span>'
					 	+'</a>'
					 +'</li>'
					  +'<li>'
					 	+'<a href="javascript:void(0)" >'
					 		+'<span class="glyphicon glyphicon-remove" style="color:#fff"></span>'
					 	+'</a>'
					 +'</li>',
					   
			link:function(scope,ele,attrs){
				//console.log($rootScope.res)
				//点击箭头
				$(ele).find("li").eq(2).on("click",function(e){
					e.preventDefault();
					
					$(ele).parent().next(".panel-body").slideToggle()
				})
				//点击关闭
				$(ele).find("li").eq(3).on("click",function(e){
					e.preventDefault();

					$(ele).parent().parent(".panel").hide();


				})

			}

		}
	}
	//formsCtrl表单
	function direcForm(){

		return {
			restrict:"AE",

			template:'<li><i class="glyphicon glyphicon-chevron-down"></i></li>'
					  +'<li><i class="glyphicon glyphicon-refresh"></i></li>'
					  +'<li><i class="glyphicon glyphicon-remove"></i></li>',
			link:function(scope,ele,attrs){
				console.log(111111)
				//切换
				$(ele).find("li").eq(0).on("click",function(){
					
					$(this).parent().parent().next(".panel-body").slideToggle();
				})
				//关闭
				$(ele).find("li").eq(2).on("click",function(){
					$(this).parent().parent().parent().hide()
				})
			}
		}
	}


	function createDom(){
		return {
			restrict:"AE",
			template:'<ul>'
			            +'<li>'
						  +'<a href="javascript:void(0)" id="dropdown-menu">'
						 	  +'<span class="glyphicon glyphicon-certificate"></span>'
						  +'</a>'
						+'</li>'
						+'<li>'
						 	+'<a href="javascript:void(0)" >'
						 	  +'<span class="glyphicon glyphicon-random"></span>'
						 	+'</a>'
						+'</li>'
						+'<li>'
						 	+'<a href="javascript:void(0)" >'
						 	 +'<span class="glyphicon glyphicon-chevron-down" ng-click="toggle()"></span>'
						 	+'</a>'
						+'</li>'
						+'<li>'
						 	+'<a href="javascript:void(0)">'
						 		+'<span class="glyphicon glyphicon-remove" ng-click="hidden()"></span>'
						 	+'</a>'
						+'</li>'
					+'</ul>',
	        link:function(scope,ele){
	            //console.log($(ele).find("li").size());
	            var flag=true;
	        	$(ele).find("li").eq(2).find('span').on("click",function(){
	        		if(flag){
	        			$(this).parents('.panel-heading').next().hide();
		        		flag=false;
	        		}else{
	        			$(this).parents('.panel-heading').next().show();
		        		flag=true;
	        		}	
	        	})
	        	$(ele).find("li").eq(3).find('span').on("click",function(){
	                    $(this).parents('.div').css("visibility","hidden");
	        	})
	        }
		}

	}

	


	
		/*	
		var data={
			x:["Jan01","Jan08","Jan16","Jan24","Feb01","Feb08"],
			y:["0","500","1000","1500","2000","2500"],
			val:[//折线图以坐标轴为原点为参考点的数据
					[0,500],
					[30,1000],
					[50,1500],
					[100,2000],
					[150,1500],
					[200,2500]
				],
			lineColor:"#fff",//折线颜色
			cirColor:"#fff",//圆圈颜色
			bgColor:"#00b8ce",//背景颜色
			fillColor:"#66d4e2"//填充颜色



		}
	
		var cvs = document.getElementById("cvs");
		var ctx = cvs.getContext("2d");
			cvs.width = "700";
			cvs.height = "500";
			cvs.style.background = "#00b8ce";

			//绘制坐标轴
			ctx.lineWidth = "2";
			ctx.strokeStyle = "#fff";

			ctx.moveTo(100,50);//y轴顶点
			ctx.lineTo(100,data.y.length*50);//原点
			ctx.lineTo(100+data.y.length*50,data.y.length*50);//x轴终点
			
			ctx.stroke();

			//绘制x轴
			for(var i = 0 ,len = data.x.length; i < len ; i++){
				var val = data.x[i];
				
				ctx.fillStyle="#fff";
				ctx.fillText( val , 100+50*i-10 , 330 );
				ctx.stroke();
			}
			//绘制y轴
			for(var i = 0 ,len = data.y.length; i < len; i++){
				var val = data.y[i];
				ctx.beginPath()
				ctx.fillStyle = "#fff";
				ctx.fillText( val , 50 , 300-50*i);
				ctx.closePath()
				ctx.stroke();
			}

			var scaleX = 1;
			var scaleY = data.y[1]/50;
			
			
			//绘制折线
			ctx.beginPath();
			ctx.moveTo(100,data.y.length*50)//原点
			for(var i = 0 , len = data.val.length ; i < len ; i++){

				x = data.val[i][0]/scaleX;
				y = data.val[i][1]/scaleY;
				
				ctx.strokeStyle = "#fff";
				ctx.lineTo(100+x,data.y.length*50-y);
				
				//绘制注释
				//ctx.fillText("("+data.val[i][0]+","+data.val[i][1]+")",100+x+5,data.y.length*50-y)
				ctx.stroke();
				
			}
			ctx.lineTo(100+x,data.y.length*50)
			ctx.closePath()
			ctx.fillStyle=data.fillColor;
			ctx.fill();
			//绘制圆形
			for(var i = 0 , len = data.val.length; i < len ; i++){
				x = data.val[i][0]/scaleX;
				y = data.val[i][1]/scaleY;
				ctx.strokeStyle = "#fff"
				ctx.beginPath();
				
				ctx.shadowOffsetX = 1;//水平偏移
				ctx.shadowOffsetY = 2;//垂直偏移
				ctx.shadowBlur = 5;//阴影模糊度
				ctx.shadowColor = "#000";//阴影颜色

				ctx.arc(100+x,data.y.length*50-y,4,0,Math.PI*2);
				ctx.closePath();
				ctx.stroke();
			}*/
	
	
	$.drawLine = function (opt){

		var data={//默认参数

			cvsId:"cvs",//画布id
			cvsW:"700",//画布宽高
			cvsH:"500",
			bgColor:"#00b8ce",//背景颜色
			axisColor:"#fff",//轴线颜色
			lineColor:"#fff",//折线颜色
			cirColor:"#fff",//圆圈颜色
			textColor:"#fff",//文字颜色
			fillColor:"#66d4e2",//填充颜色
			paddingX:80,//x轴间距
			paddingY:50,//y轴间距
			x:["Jan01","Jan08","Jan16","Jan24","Feb01","Feb08","feb16"],
			y:["0","500","1000","1500","2000","2500","3000"],
			val:[//折线图以坐标轴为原点为参考点的数据
					[00,500],
					[30,1500],
					[50,500],
					[100,2000],
					[150,1500],
					[200,3000],
					[250,2000]
					
				]
			

		}
		
		//扩展参数
		var set = $.extend({},data,opt);
		var cvs = document.getElementById(set.cvsId);
		var ctx = cvs.getContext("2d");
			cvs.width = set.cvsW;
			cvs.height = set.cvsH;
			cvs.style.background = set.bgColor;

			//绘制坐标轴
			ctx.lineWidth = "2";
			ctx.strokeStyle = set.axisColor;

			ctx.moveTo(100,50);//y轴顶点
			ctx.lineTo(100,set.y.length*set.paddingY);//原点
			ctx.lineTo(100+set.x.length*set.paddingX,set.y.length*set.paddingY);//x轴终点
			
			ctx.stroke();

			//绘制x轴
			for(var i = 0 ,len = set.x.length; i < len ; i++){
				var val = set.x[i];
				
				ctx.fillStyle=set.textColor;
				ctx.fillText( val , 100+set.paddingX*i-10 , set.y.length*set.paddingY+30 );
				ctx.stroke();
			}
			//绘制y轴
			for(var i = 0 ,len = set.y.length; i < len; i++){
				var val = set.y[i];
				ctx.beginPath()
				ctx.fillStyle = set.textColor;
				ctx.fillText( val , 50 , set.y.length*set.paddingY-50*i);
				ctx.closePath()
				ctx.stroke();
			}

			var scaleX = 50/set.paddingX;
			var scaleY = set.y[1]/set.paddingY;
			
			
			//绘制折线
			ctx.beginPath();
			
			for(var i = 0 , len = set.val.length ; i < len ; i++){

				x = set.val[i][0]/scaleX;//按比例计算后的坐标
				y = set.val[i][1]/scaleY;
				
				ctx.strokeStyle = set.lineColor;
				ctx.lineTo(100+x,set.y.length*50-y);
				
				//绘制注释
				//ctx.fillText("("+set.val[i][0]+","+set.val[i][1]+")",100+x+5,set.y.length*50-y)
				ctx.stroke();
				
			}
			ctx.lineTo(100+x,set.y.length*50);
			ctx.lineTo(100,set.y.length*50);//回到原点
			
			ctx.fillStyle=set.fillColor;
			ctx.fill();
			//绘制圆形
			for(var i = 0 , len = set.val.length; i < len ; i++){
				x = set.val[i][0]/scaleX;
				y = set.val[i][1]/scaleY;
				ctx.strokeStyle = set.cirColor;
				ctx.beginPath();
				
				ctx.shadowOffsetX = 1;//水平偏移
				ctx.shadowOffsetY = 2;//垂直偏移
				ctx.shadowBlur = 5;//阴影模糊度
				ctx.shadowColor = "#000";//阴影颜色

				ctx.arc(100+x,set.y.length*50-y,4,0,Math.PI*2);
				
				ctx.stroke();
			}
		}
	//折线图
	/*$.drawLine({
		lineColor:"blue"
	});*/
	/*
	//柱状图

		var canvas=document.getElementById("histogram");
		var cxt=canvas.getContext("2d");
			data={
				"y":["0","100","200","300","400","500","600","700","800","900","1000"],//纵轴刻度
				"x":["1月","2月","3月","4月","5月"],//横轴月份
				"val":["320","170","250","520","840"],//数据值
				"color":["red","blue","orange","purple","green"]//柱的颜色
			}
		
		DrawHis(cxt,data);

		function DrawHis(cxt,data)
		{
			//绘制坐标轴
			cxt.beginPath();
			cxt.moveTo(100,20);//y轴顶点
			cxt.lineTo(100,520)//y:10*50+20=520//原点
			cxt.lineTo(600,520)//x:5*100+100=600//x轴终点

			cxt.stroke();
			//绘制y坐标
			for(var i=0;i<data.y.length;i++)
			{
				cxt.fillText(data.y[i],70,520-50*i);//fillText(text,x,y)//绘制实心文本，x,y文本左下角坐标
				cxt.stroke();
			}
			//绘制x坐标
			for(var i=0;i<data.x.length;i++)
			{
				cxt.fillText(data.x[i],100+100*(i+1),540)//100+100*(i+1)月份的横坐标
				cxt.stroke();
			}
			//绘制数据组
			for(var i=0;i<data.val.length;i++)
			{
				cxt.beginPath();
				cxt.strokeStyle=data.color[i];
				cxt.lineWidth="50";
				cxt.moveTo(100+100*(i+1),520);
				cxt.lineTo(100+100*(i+1),520-data.val[i]*(50/100));//520-data.val[i] * (50/100) 柱子顶端坐标 
				cxt.stroke();
			}

		}

	*/

	/*
	<canvas id="pieChart" width="500" height="500" style="border:1px solid #000"></canvas>
	
	

			var canvas=document.getElementById("pieChart");
			var cxt=canvas.getContext("2d")//创建上下文绘制环境

			data={
				//"y":["0","100","200","300","400","500","600","700","800","900","1000"],//纵轴刻度
				"x":["1月","2月","3月","4月","5月"],//横轴月份
				"val":["320","570","250","520","840"],//数据值
				"color":["red","blue","orange","purple","green"]//饼的颜色
			}
			PieChart(cxt,data)
			function PieChart(cxt,data)
			{
				//求和
				var sum=0;
				for(var i=0;i<data.val.length;i++)
				{
					sum+=data.val[i]*1;
				}
				//饼图
				var start=0;
			
				for(var i=0;i<data.val.length;i++)
				{	pi=Math.PI;
					
					
					 //结束角度=上一个的角度加当前角度
					cxt.beginPath();
					cxt.fillStyle=data.color[i];
					cxt.moveTo(200,200)
					cxt.arc(200,200,100,start,start+data.val[i]*2*pi/sum);//默认：false顺时针 绘制
					cxt.closePath();
					cxt.fill();
					start+=data.val[i]*2*pi/sum//下一个开始角度
					
				}
				

				//文字 
				for(var i=0;i<data.x.length;i++)
				{
					cxt.beginPath();
					cxt.fillStyle=data.color[i];
					cxt.fillRect(350,90+30*i,30,10) //垂直间距30  90*30*i //矩形
					cxt.fillText(data.x[i],400,100+30*i)//垂直间距30  月份

					cxt.closePath();
					cxt.fill()
				}
				

			}
			
	

	*/
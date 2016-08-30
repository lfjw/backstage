/*function PieChart(cxtId,data)
{
	var canvas=document.getElementById(cxtId);
	var cxt=canvas.getContext("2d")//创建上下文绘制环境

	data={
		//"y":["0","100","200","300","400","500","600","700","800","900","1000"],//纵轴刻度
		"x":["1月","2月","3月","4月","5月"],//横轴月份
		"val":["320","570","250","520","840"],//数据值
		"color":["red","blue","orange","purple","green"]//柱的颜色
	}
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
	

}*/
			

$.pieChart = function (opt){
	var dft = {
		cvsId: "cvs",
		cvsW:"550",
		cvsH:"400",
		bgColor:"#fff",
		data :{	
				"x":["1月","2月","3月","4月","5月"],//横轴月份
				"val":["320","570","250","520","840"],//数据值
				"color":["red","blue","orange","purple","green"]
		    }
		}
	var set = $.extend({},dft,opt);
	var canvas=document.getElementById(set.cvsId);
	var cxt=canvas.getContext("2d")//创建上下文绘制环境
		canvas.width = set.cvsW;
		canvas.height = set.cvsH;
		canvas.style.background = set.bgColor;
		//console.log(set.cvsW,set.cvsH,set.bgColor)
	//求和
	var sum=0;
	for(var i=0;i<set.data.val.length;i++)
	{
		sum+=set.data.val[i]*1;
	}
	//饼图
	var start=0;

	for(var i=0;i<set.data.val.length;i++)
	{	pi=Math.PI;
		
		
		//结束角度=上一个的角度加当前角度
		cxt.beginPath();
		cxt.fillStyle=set.data.color[i];
		cxt.moveTo(200,200)
		cxt.arc(200,200,150,start,start+set.data.val[i]*2*pi/sum);//默认：false顺时针 绘制
		
		cxt.closePath();
		cxt.fill();
		start+=set.data.val[i]*2*pi/sum//下一个开始角度
		
	}
	//绘制白色的园
	cxt.beginPath()
	cxt.fillStyle="#fff";
	cxt.arc(200,200,80,0,Math.PI*2);//默认：false顺时针 绘制
	cxt.fill();
	cxt.closePath();
	//文字 
	for(var i=0;i<set.data.x.length;i++)
	{
		cxt.beginPath();
		cxt.fillStyle=set.data.color[i];
		cxt.fillRect(400,90+30*i,30,10) //垂直间距30  90*30*i //矩形
		cxt.fillText(set.data.x[i],450,100+30*i)//垂直间距30  月份

		cxt.closePath();
		cxt.fill()
	}

}
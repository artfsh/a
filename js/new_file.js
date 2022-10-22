function clear(){//删除表格的方法。search和tab都要调用。
	//通过删除表格容器来删除表格，再把表格容器创建回来。
	document.getElementById("main-table-container").remove();
	var container = document.createElement("div");
	container.id = "main-table-container";
	document.body.appendChild(container);
}

function tab1Selected(){//顶部tab相关方法
	//1.按钮样式的变换
	document.getElementById("tab1").id = "tab1-selected";
	document.getElementById("tab2-selected").id = "tab2";
	//2.清空input表单
	document.getElementById("score").value = "";
	document.getElementById("score").placeholder = "输入美术分，查询文化最低要求"
	//3.清空表格
	clear();
}
function tab2Selected(){//顶部tab相关方法
	document.getElementById("tab2").id = "tab2-selected";
	document.getElementById("tab1-selected").id = "tab1";
	document.getElementById("score").value = "";
	document.getElementById("score").placeholder = "输入文化分，查询美术最低要求"
	clear();
}

function search() {//核心功能-查询分数线
	//先清除上次生成数据
	clear();
	//获取用户输入的分数
	var score = document.getElementById('score').value;
	//判断这是美术分还是文化分
	if(document.getElementById("tab1-selected")){//美术分，适用公式：文化 = 2*综合 - 660/450*美术
		//生成表格
		var table = document.createElement("table");
		table.className = "main-table";
		//table的层级关系：
		// table.border = "1";
		// 2、得到json格式的对象
		var jsons = new Function("return " + str)();
		// 3、循环这个数组
		for (var i = 0; i < jsons.length; i++) {
			// 4、生成每一个行
			// 创建tr标签
			var tr = document.createElement("tr");
			tr.className = "main-tr";
			// 5、添加td，就需要遍历每一个对象中的成员
			for (var k in jsons[i]) {
				// 6、创建td
				var td = document.createElement("td");
				td.className = "main-td";
				//括号内jsons[i][k]，根据美术/文化套不同计算公式。此外还要判断是校名还是分数。
				if(k=="name"){//k是“name"说明此时遍历到了data里的院校，否则分数
					td.appendChild(document.createTextNode(jsons[i][k]));
				}else{
					if((2*jsons[i][k]-660/450*score)>300 && (2*jsons[i][k]-660/450*score)<=660){//文化控制线300
						td.appendChild(document.createTextNode((2*jsons[i][k]-660/450*score).toFixed(2)));
					}else if((2*jsons[i][k]-660/450*score)<=300){
						td.appendChild(document.createTextNode(300));
					}else{
						td.appendChild(document.createTextNode("--"));
					}
				}
				//7、追加td
				tr.appendChild(td);
			}
			// 循环结束，就得到一个行
			// 将行追加到table
			table.appendChild(tr);
		}
		// 将table加到main-table-container中
		document.getElementById("main-table-container").appendChild(table);
	}else if(document.getElementById("tab2-selected")){//文化分
		//生成表格
		var table = document.createElement("table");
		table.className = "main-table";
		//table的层级关系：
		// table.border = "1";
		// 2、得到json格式的对象
		var jsons = new Function("return " + str)();
		// 3、循环这个数组
		for (var i = 0; i < jsons.length; i++) {
			// 4、生成每一个行
			// 创建tr标签
			var tr = document.createElement("tr");
			tr.className = "main-tr";
			// 5、添加td，就需要遍历每一个对象中的成员
			for (var k in jsons[i]) {
				// 6、创建td
				var td = document.createElement("td");
				td.className = "main-td";
				//括号内jsons[i][k]，根据美术/文化套不同计算公式。此外还要判断是校名还是分数。
				if(k=="name"){//k是“name"说明此时遍历到了data里的院校，否则分数
					td.appendChild(document.createTextNode(jsons[i][k]));
				}else{//数字后面加上“.toFixed(2)”，保留两位小数。美术控制线270
					if((15/11*jsons[i][k]-15/22*score)>270 && (15/11*jsons[i][k]-15/22*score)<=450){
						td.appendChild(document.createTextNode((15/11*jsons[i][k]-15/22*score).toFixed(2)));
					}else if((15/11*jsons[i][k]-15/22*score)<=270){
						td.appendChild(document.createTextNode(270));
					}else{
						td.appendChild(document.createTextNode("--"));
					}
				}
				//7、追加td
				tr.appendChild(td);
			}
			// 循环结束，就得到一个行
			// 将行追加到table
			table.appendChild(tr);
		}
		// 将table加到main-table-container中
		document.getElementById("main-table-container").appendChild(table);
	}
}

//改变查询年份
function changeTime(){
	var time = document.getElementById("timeDock").value;
	switch(time){
		case "2022":
			str = str2022;
			break;
		case "2021":
			str = str2021;
			break;
		default:
			break;
	}
	search();
}

function help(){//帮助
	alert("使用说明：输入已知或预估的美/文求对应最低的文/美。查询结果为‘--’代表输入分数过低，对应分数需求超出总分。此外，如同济大学等院校可能对最低文化分有额外的要求，一切以院校招生简章为准。");
}

window.onload = function(){
	tab1Selected();
}
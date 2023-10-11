var Group_List = new Array();

function createRequest() {
	try {
		request = new XMLHttpRequest();
	}
	catch (failed) {
		request = null;
	}
	if (request == null) {
		alert("Error creating request object!");
	}
}

function Search() {
	createRequest();

	var parent = window.parent.document;
	var search_gname = parent.getElementById("search_gname").value;
	var search_gkeyword = parent.getElementById("search_gkeyword").value;

	var qry = "search_gname=" + search_gname + "&search_gkeyword=" + search_gkeyword;
	var url = "Search.jsp?";

	request.open("POST", url, true);
	request.onreadystatechange = updatePage;
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
	request.send(qry);
}


function updatePage() {
	var groups = {};

	if (request.readyState == 4) {
		var obj = request.responseText;
		var keys = ["gidx", "gmaster", "gname", "gkeyword"];

		var jsonObj = JSON.parse(obj);

		var parent = document.getElementById("List");
		parent.replaceChildren();
		Group_List = new Array();
		for (var i = 0; i < jsonObj.length; i++) {
			var newGroup = document.createElement("tr");
			var newGroupImg = document.createElement("td");
			var newGname = document.createElement("td");
			var newDetail = document.createElement("td");
			var detail_btn = document.createElement("input");
			//newGroup.setAttribute("class", "search_gname");
			newGroup.setAttribute("class", "Result_tr");
			newGroupImg.setAttribute("class", "Result_img");
			newGname.setAttribute("class", "Result_gname");
			newDetail.setAttribute("class", "Result_btn");

			detail_btn.setAttribute("type", "button");
			detail_btn.setAttribute("value", "그룹보기");
			detail_btn.setAttribute("id", "detail_btn" + i);
			detail_btn.setAttribute("class", "DetailBtn");
			detail_btn.onclick = Detail;

			newGroupImg.innerHTML = (i + 1);
			newGname.innerHTML = jsonObj[i].gname;
			parent.appendChild(newGroup);
			newGroup.appendChild(newGroupImg);
			newGroup.appendChild(newGname);
			newGroup.appendChild(newDetail);
			newDetail.appendChild(detail_btn);

			Group_List.push([jsonObj[i].gidx, jsonObj[i].gmaster, jsonObj[i].gname, jsonObj[i].gkeyword]);

		}
	}
}

var openWin;
var number = 0;
var gidx = 0;

function Detail() {
	var str = event.currentTarget.id;
	var regex = /[^0-9]/g;
	var result = str.replace(regex, "");
	number = parseInt(result);
	openWin = window.open("Detail_Group.html", "_blank", "width=500,height=500");
}
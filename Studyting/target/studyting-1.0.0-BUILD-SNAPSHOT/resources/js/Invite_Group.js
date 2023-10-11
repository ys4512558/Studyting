var Person_List = new Array();

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
	var search_name = parent.getElementById("search_name").value;
	var search_keyword = parent.getElementById("search_keyword").value;

	var qry = "search_name=" + search_name + "&search_keyword=" + search_keyword;
	var url = "Search_Invite.jsp?";

	request.open("POST", url, true);
	request.onreadystatechange = updatePage;
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
	request.send(qry);
}


function updatePage() {

	if (request.readyState == 4) {
		var obj = request.responseText;
		var keys = ["name", "keyword", "pr"];

		var jsonObj = JSON.parse(obj);

		var parent = document.getElementById("List");
		parent.replaceChildren();
		Group_List = new Array();
		for (var i = 0; i < jsonObj.length; i++) {
			var newPerson = document.createElement("tr");
			//var newGroupImg = document.createElement("td");
			var newName = document.createElement("td");
			var newKeyword = document.createElement("td");
			var newPr = document.createElement("td");
			var pr_btn = document.createElement("input");
			var invite_btn = document.createElement("input");

			//newGroup.setAttribute("class", "search_gname");
			newPerson.setAttribute("class", "Result_tr");
			//newGroupImg.setAttribute("class", "Result_img");
			newName.setAttribute("class", "Result_name");
			newKeyword.setAttribute("class", "Result_name");
			newPr.setAttribute("class", "Result_btn");

			pr_btn.setAttribute("type", "button");
			pr_btn.setAttribute("value", "보기");
			pr_btn.setAttribute("id", "pr_btn" + i);
			pr_btn.setAttribute("class", "Search_Btn");
			pr_btn.onclick = Pr_Detail;

			invite_btn.setAttribute("type", "button");
			invite_btn.setAttribute("value", "초대");
			invite_btn.setAttribute("id", "invite_btn" + i);
			invite_btn.setAttribute("class", "Search_Btn");
			invite_btn.onclick = Invite;

			//newGroupImg.innerHTML = i;
			newName.innerText = jsonObj[i].name;
			newKeyword.innerText = jsonObj[i].keyword;

			parent.appendChild(newPerson);
			//newGroup.appendChild(newGroupImg);
			newPerson.appendChild(newName);
			newPerson.appendChild(newKeyword);
			newPerson.appendChild(newPr);
			newPr.appendChild(pr_btn);
			newPr.appendChild(invite_btn);

			Person_List.push([jsonObj[i].name, jsonObj[i].keyword, jsonObj[i].pr]);
		}
	}
}

var openWin;
var number = 0;
var gidx = 0;

function Pr_Detail() {
	var str = event.currentTarget.id;
	var regex = /[^0-9]/g;
	var result = str.replace(regex, "");
	number = parseInt(result);
	var pr = document.getElementById("pr");
	pr.innerText = Person_List[number][2];
}

function Invite() {
	var str = event.currentTarget.id;
	var regex = /[^0-9]/g;
	var result = str.replace(regex, "");
	number = parseInt(result);
	//로컬스토리지에서 gname가져오기
	const gidx = localStorage.getItem("gidx");
	const gname = localStorage.getItem("gname");

	createRequest();

	var username = event.currentTarget.parentElement.parentElement.childNodes[0].innerText;

	/*var qry = "gidx=" + gidx
		+ "&name=" + Person_List[number][0]
		+ "&gname=" + gname;*/

	var qry = "gidx=" + gidx
		+ "&name=" + username
		+ "&gname=" + gname;


	var url = "Send_Invite.jsp?";


	request.open("POST", url, true);
	request.onreadystatechange = movePage;
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
	request.send(qry);
}

function movePage() {
	if (request.readyState == 4) {
		var check = request.responseText;
		if (check.includes("1")) {
			alert("초대되었습니다.");
		}
		else if (check.includes("2")) {
			alert("사용자가 이미 참여하고 있습니다.");
		}
		else {
			alert("초대한 사용자 입니다.");
		}
	}
}
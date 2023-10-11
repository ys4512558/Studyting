var number = -1;

function init() {
    Input2();
}

function createRequest2() {
    try {
        request2 = new XMLHttpRequest();
    }
    catch (failed) {
        request2 = null;
    }
    if (request2 == null) {
        alert("Error creating request object!");
    }
}
function createRequest3() {
    try {
        request3 = new XMLHttpRequest();
    }
    catch (failed) {
        request3 = null;
    }
    if (request3 == null) {
        alert("Error creating request object!");
    }
}

function Input2() {
    createRequest2();

    var gidx = localStorage.getItem("gidx");

    var qry2 = "gidx=" + gidx;
    var url2 = "Request_List.jsp?";

    request2.open("POST", url2, true);
    request2.onreadystatechange = inviteupdatePage;
    request2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request2.send(qry2);
}

function inviteupdatePage() {
    if (request2.readyState == 4) {
        var parent = document.getElementById("groups");
        var check2 = request2.responseText;
        var ingroups = check2.split(',');
        console.log(ingroups.length + ingroups);
        for (var i = 0; i < ingroups.length - 1; i++) {
            console.log(ingroups[i]);
            var pbox = document.createElement("span");
            var pname = document.createElement("span");
            var ok = document.createElement("input");
            var nk = document.createElement("input");
            var br = document.createElement("br");

            pname.style.position = "relative";
            pname.style.left = "45%";
            pname.setAttribute("id", "Pname" + i);

            ok.setAttribute("type", "button");
            ok.setAttribute("value", "수락");
            ok.style.fontSize = "10px";
            ok.style.position = "absolute";
            ok.style.left = "75%";
            ok.style.color = "rgba(255, 255, 255, 1)";
            ok.style.background = "rgb(164, 165, 165)";
            ok.style.border = "none";
            ok.style.borderRadius = "5px";
            ok.style.fontSize = "13px";
            ok.setAttribute("onclick", "BtnOk()");
            ok.setAttribute("id", "okBtn" + i);

            nk.setAttribute("type", "button");
            nk.setAttribute("value", "거절");
            nk.style.fontSize = "10px";
            nk.style.position = "absolute";
            nk.style.left = "85%";
            nk.style.color = "rgba(255, 255, 255, 1)";
            nk.style.background = "rgb(164, 165, 165)";
            nk.style.border = "none";
            nk.style.borderRadius = "5px";
            nk.style.fontSize = "13px";
            nk.setAttribute("onclick", "BtnNk()");
            nk.setAttribute("id", "nkBtn" + i);

            pname.innerText = ingroups[i] + " ";
            pbox.appendChild(pname);
            pbox.appendChild(ok);
            pbox.appendChild(nk);
            pbox.appendChild(br);
            parent.appendChild(pbox);
        }
    }
}

function BtnOk() {
    var str = event.currentTarget.id;
    var regex = /[^0-9]/g;
    var result = str.replace(regex, "");
    number = parseInt(result);
    Request_Result("Ok");
}

function BtnNk() {
    var str = event.currentTarget.id;
    var regex = /[^0-9]/g;
    var result = str.replace(regex, "");
    number = parseInt(result);
    Request_Result("Nk");

}

function Request_Result(result) {
    createRequest3();

    var PnameStr = "Pname" + number;
    var pname = document.getElementById(PnameStr).innerText;

    pname = pname.split("\n").join("");
    pname = pname.split("\r").join("");

    var gmaster = localStorage.getItem("gmaster");
    var gidx = localStorage.getItem("gidx");

    var qry3 = "name=" + pname + "&gmaster=" + gmaster
        + "&OKNK=" + result + "&gidx=" + gidx;
    var url3 = "Request_Result.jsp?";

    request3.open("POST", url3, true);
    request3.onreadystatechange = ParentReload;
    request3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request3.send(qry3);
}

function ParentReload() {
    opener.location.reload();
    location.reload();
}

var Person_List = new Array();

function createRequest4() {
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
    createRequest4();

    var parent = window.parent.document;
    var search_name = parent.getElementById("search_name").value;
    var search_keyword = "";

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

            //newGroup.setAttribute("class", "search_gname");
            newPerson.setAttribute("class", "Result_tr");
            //newGroupImg.setAttribute("class", "Result_img");
            newName.setAttribute("class", "Result_name");
            newKeyword.setAttribute("class", "Result_keyword");
            newPr.setAttribute("class", "Result_btn");

            pr_btn.setAttribute("type", "button");
            pr_btn.setAttribute("value", "보기");
            pr_btn.setAttribute("id", "pr_btn" + i);
            pr_btn.setAttribute("class", "Search_Btn");
            pr_btn.onclick = Pr_Detail;


            //newGroupImg.innerHTML = i;
            newName.innerText = jsonObj[i].name;
            newKeyword.innerText = jsonObj[i].keyword;

            parent.appendChild(newPerson);
            //newGroup.appendChild(newGroupImg);
            newPerson.appendChild(newName);
            newPerson.appendChild(newKeyword);
            newPerson.appendChild(newPr);
            newPr.appendChild(pr_btn);

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
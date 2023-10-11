var Group_List = new Array();
var number = 0;
function init() {
    Group_List = window.opener.Group_List;
    number = window.opener.number;

    document.getElementById("gname").innerText = Group_List[number][2];
    var keywords = document.getElementById("keywords");

    var temp = (Group_List[number][3]).split(",");
    var key = "";
    for (var i = 0; i < temp.length; i++) {
        var keyword = document.createElement("span");
        keyword.setAttribute("class", "keyword");
        key += temp[i] + " ";
    }
    keyword.innerText = key;
    keywords.appendChild(keyword);
}

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

function Request() {
    createRequest();

    var gname = document.getElementById("gname").innerText;
    var gidx = Group_List[number][0];

    var qry = "gidx=" + gidx + "&gname=" + gname;
    var url = "Request_Group.jsp?";

    request.open("POST", url, true);
    request.onreadystatechange = updatePage;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
}
function updatePage() {
    if (request.readyState == 4) {
        var check = request.responseText;
        if (check.includes("1")) {
            alert("신청되었습니다.");
        }
        else if (check.includes("2")) {
            alert("이미 참여중인 그룹입니다.");
        }
        else {
            alert("이미 신청하신 그룹방 입니다.");
        }
        window.close();
    }
}
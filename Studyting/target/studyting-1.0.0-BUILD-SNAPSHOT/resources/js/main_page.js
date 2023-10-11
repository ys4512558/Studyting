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

var Cname;
getCookie(name);
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if (start != -1) {
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    Cname = cValue;
}
function changeIframeUrl(url) {
    document.getElementById("my_frame").src = url;
}
function Add_Group() {
    window.open("New_Group.html", '_blank', "width = 650, height = 550, toolbar=no,"
        + "menubar=no, location=no,scrollbars=no, resizable=no");
}


function getUserGroups() { //유저의 그룹들 다 가져와서 화면에 뿌림
    return new Promise(function (resolve, reject) {

        createRequest();
        var url = "getUserGroups.jsp?";

        var qry = "name=" +
            Cname; //이부분 쿠키로 name가져와서 수정할것 

        //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");

        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
        request.onload = () => {
            if (request.readyState == 4) {
                const jsonObj = request.responseText;
                const groups = JSON.parse(jsonObj);
                console.log(groups);


                for (var i = 0; i < groups.length; i++) {
                    //var left_side_bar_item = document.createElement("span");
                    //left_side_bar_item.className = 'left_side_bar_item';
                    var a = document.createElement("a");
                    a.setAttribute("onClick", "moveGroup(this)");
                    a.setAttribute("id", groups[i].gidx);
                    a.setAttribute("name", groups[i].gmaster);

                    /*a.style.position = "relative";
                    a.style.top = "5%";
                    a.style.borderRadius = "25px";
                    a.style.background = "white";
                    a.style.border = "2px solid darkgray";
                    a.style.color = "black";
                    
                    a.style.width = "1100px";
                    a.style.height = "123%";*/
                    a.setAttribute("class", "Group_List_style");


                    //console.log(groups[i])
                    a.innerText = groups[i].gname
                    //console.log(groups[i].gname)
                    //left_side_bar_item.appendChild(a);
                    document.getElementsByClassName("e106_238")[0].appendChild(a);

                }
                resolve("next");
            }

        };
        request.send(qry);
    });
}




function onLoad() { //문서가 로드되면 실행
    //localStorage.setItem("gidx", "1");
    Promise.resolve()//이건 비동기로 실행되는 xmlhttp들을 동기로 만들겠다는 거임
        .then(getUserGroups); //왼쪽에 가입한 그룹들 뿌리기
    //.then(getGroupPosts) //가운데에 그룹 내 포스트 뿌리기
    //.then(getGroupMembers); //오른쪽에 그룹 내 멤버들 뿌리기
}

function moveGroup(e) { //다른 그룹 누르면 발동 누른 그룹 gidx저장함
    localStorage.setItem("gidx", e.id);
    localStorage.setItem("gmaster", e.name);
    console.log(document.getElementById(e.id).innerText);
    localStorage.setItem("gname", document.getElementById(e.id).innerText);
    //e.id);
    changeIframeUrl('groupView.html');
}
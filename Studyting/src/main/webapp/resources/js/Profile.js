var namePrompt = "";
var prPrompt = "";
var num = -1;
function init() {
    var sName = parent.Cname;
    document.getElementById("name").value = sName;
    Input();
    Input2();
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

function Input() {
    createRequest();
    var name = document.getElementById("name").value;

    var qry = "name=" + name;
    var url = "Profile.jsp?";

    request.open("POST", url, true);
    request.onreadystatechange = updatePage;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
}

var imUrl = "";
function updatePage() {
    if (request.readyState == 4) {
        var check = request.responseText;
        var words = check.split('/');
        //document.getElementById("keyword").value = words[0];
        document.getElementById("pr").value = words[1];
        var keywords = words[0].split(",");
        var imgUrl = words[2];

        //변경이다이기
        imUrl = words[2];
        document.getElementById("profil_img").src = "http://" + window.location.hostname + ":8080/img/" + imgUrl;
        console.log('C:img\\' + imgUrl);
        //부모 선언
        var parent = document.getElementById("keywords");
        for (var i = 0; i < keywords.length; i++) {
            var temp = keywords[i].replace(/\r\n/g, '');

            //자식생성 및 연결
            var keyword = document.createElement("span");
            var key = document.createElement("span");
            var remove = document.createElement("input");

            remove.setAttribute("type", "button");
            remove.setAttribute("value", "X");
            remove.style.fontSize = "12px";
            remove.style.color = "rgba(255, 255, 255, 1)";
            remove.style.backgroundColor = "rgb(164, 165, 165)";
            remove.style.border = "none";
            remove.style.borderRadius = "5px";
            remove.style.margin = "1.2%";
            remove.setAttribute("onclick", "btnClick();");

            key.innerText = temp;

            keyword.appendChild(key);
            keyword.appendChild(remove);
            parent.appendChild(keyword);
        }
    }
}

function btnClick() {
    if (confirm("키워드를 삭제하시겠습니까?")) {
        var current = event.currentTarget;
        var parent = current.parentElement;
        var pparent = parent.parentElement;
        pparent.removeChild(parent);

        Update_Keyword();
    } else {
    }
}

function Update_Keyword() {
    var parent = document.getElementById("keywords");

    var keywords = "";
    for (var i = 0; i < parent.childElementCount; i++) {
        var str = parent.childNodes[i].innerText;

        if (keywords == "") {
            keywords = parent.childNodes[i].innerText;
        }
        else {
            keywords = keywords + "," + parent.childNodes[i].innerText;
        }
    }

    keywords = keywords.split("\n").join("");
    keywords = keywords.split("\r").join("");

    createRequest();
    var name = document.getElementById("name").value;

    var qry = "name=" + name + "&keyword=" + keywords;
    var url = "Update_Keyword.jsp?";

    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
}

function Input2() {
    createRequest2();
    var name2 = document.getElementById("name").value;

    var qry2 = "name=" + name2;
    var url2 = "invitegroup.jsp?";

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
            var gbox = document.createElement("span");
            var gname = document.createElement("span");
            var ok = document.createElement("input");
            var nk = document.createElement("input");
            var br = document.createElement("br");

            gname.style.position = "relative";
            gname.style.left = "5%";
            gname.setAttribute("id", "Gname" + i);

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

            gname.innerText = ingroups[i] + " ";
            gbox.appendChild(gname);
            gbox.appendChild(ok);
            gbox.appendChild(nk);
            gbox.appendChild(br);
            parent.appendChild(gbox);
        }
    }
}

function BtnOk() {
    if (confirm("그룹초대를 수락하시겠습니까?")) {
        var str = event.currentTarget.id;
        var regex = /[^0-9]/g;
        var result = str.replace(regex, "");
        number = parseInt(result);
        Invite_Result("Ok");
    }
}

function BtnNk() {
    if (confirm("그룹초대를 거절하시겠습니까?")) {
        var str = event.currentTarget.id;
        var regex = /[^0-9]/g;
        var result = str.replace(regex, "");
        number = parseInt(result);
        Invite_Result("Nk");
    }
}

function Invite_Result(result) {
    createRequest3();

    var GnameStr = "Gname" + number;
    var gname = document.getElementById(GnameStr).innerText;

    gname = gname.split("\n").join("");
    gname = gname.split("\r").join("");

    var name = document.getElementById("name").value;

    var imgUrl = document.getElementById("profil_img").src;

    var qry3 = "name=" + name + "&gname=" + gname
        + "&OKNK=" + result + "&imgUrl=" + imUrl;
    var url3 = "Invite_Result.jsp?";

    request3.open("POST", url3, true);
    request3.onreadystatechange = ParentReload;
    request3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request3.send(qry3);
}

function ParentReload() {
    window.parent.location.reload();
}

function rename() {
    var namePrompt = prompt("변경할 닉네임을 입력하세요");
    var nameChange = confirm(namePrompt + "으로 변경 하시겠습니까?");
    if (nameChange == true) {
        createRequest();
        var rname = document.getElementById("name").value;
        var name = namePrompt;

        var qry = "name=" + name + "&rname=" + rname;
        var url = "rename.jsp?";

        request.open("POST", url, true);
        request.onreadystatechange = nameupdatePage;
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
        request.send(qry);
    }
}
function nameupdatePage() {
    if (request.readyState == 4) {
        var check = request.responseText;
        console.log(check);
        if (check.includes("false")) {
            alert("이미 사용중인 닉네임 입니다.");
        } else {
            document.getElementById("name").value = namePrompt;
            location.reload();
            alert("닉네임 변경이 완료되었습니다.");
        }
    }
}
function repr() {
    prPrompt = prompt("수정할 자기소개를 입력하세요");
    var prChange = confirm(prPrompt + "으로 수정 하시겠습니까?");
    if (prChange == true) {
        createRequest();
        var name = document.getElementById("name").value;
        var pr = prPrompt;

        var qry = "pr=" + pr + "&name=" + name;
        var url = "repr.jsp?";

        request.open("POST", url, true);
        request.onreadystatechange = prupdatePage;
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
        request.send(qry);
    }
}
function prupdatePage() {
    if (request.readyState == 4) {
        var check = request.responseText;
        console.log(check);
        document.getElementById("pr").value = prPrompt;
        location.reload();
    }
}

//옵션 변경 시
function SelectKeyword() {
    var Select = document.getElementById("keyword");
    // select element에서 선택된 option의 value가 저장된다.
    var selectValue = Select.options[Select.selectedIndex].value;

    var parent = document.getElementById("keywords");

    var keyword = document.createElement("span");
    var key = document.createElement("span");
    var remove = document.createElement("input");

    remove.setAttribute("type", "button");
    remove.setAttribute("value", "X");
    remove.style.fontSize = "12px";
    remove.style.color = "rgba(255, 255, 255, 1)";
    remove.style.backgroundColor = "rgb(164, 165, 165)";
    remove.style.border = "none";
    remove.style.borderRadius = "5px";
    remove.style.margin = "1.2%";
    remove.setAttribute("onclick", "btnClick();");

    key.innerText = selectValue;

    keyword.appendChild(key);
    keyword.appendChild(remove);


    var check = true;
    if (parent.childElementCount > 0) {
        for (var i = 0; i < parent.childElementCount; i++) {
            var str = parent.childNodes[i].innerText;
            if (str.includes(selectValue)) {
                check = false;
                break;
            }
        }
        if (check) {
            parent.appendChild(keyword);
        }
        else {
            alert("이미 등록된 키워드 입니다.");
        }
    }
    else {
        parent.appendChild(keyword);
    }
    Update_Keyword()

}

//입력 후 엔터 시
function InputKeyword() {
    if (window.event.keyCode == 13) {
        addKeyword();
    }
}

//요소 추가 함수
function addKeyword() {
    var input_keyword = document.getElementById("input_keyword").value;

    if (input_keyword != "") {

        var parent = document.getElementById("keywords");
        var keyword = document.createElement("span");
        var key = document.createElement("span");
        var remove = document.createElement("input");

        remove.setAttribute("type", "button");
        remove.setAttribute("value", "X");
        remove.style.fontSize = "12px";
        remove.style.color = "rgba(255, 255, 255, 1)";
        remove.style.background = "rgb(164, 165, 165)";
        remove.style.border = "none";
        remove.style.borderRadius = "5px";
        remove.style.margin = "1.2%";
        remove.setAttribute("onclick", "btnClick();");

        key.innerText = input_keyword;

        keyword.appendChild(key);
        keyword.appendChild(remove);

        var check = true;
        if (parent.childElementCount > 0) {
            for (var i = 0; i < parent.childElementCount; i++) {
                if (input_keyword == parent.childNodes[i].innerText) {
                    check = false;
                    break;
                }
            }
            if (check) {
                parent.appendChild(keyword);
            }
            else {
                alert("이미 등록된 키워드 입니다.");
            }
        }
        else {
            parent.appendChild(keyword);
        }
        input_keyword.value = "";
        Update_Keyword()
    }
}

function reimg() {
    document.getElementById("uploadFile").addEventListener("change", function () {
        document.getElementById("img_file").submit();
        createRequest();
        var imgUrl = document.getElementById("uploadFile").value.split('\\').pop().toLowerCase();
        console.log(imgUrl);
        var name = document.getElementById("name").value;

        var qry = "name=" + name + "&imgUrl=" + imgUrl;
        var url = "reimg.jsp?";

        request.open("POST", url, true);
        request.onload = () => {
            if (request.readyState == 4) {
                location.reload();
            }
        }
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
        request.send(qry);
    }, false);
    document.getElementById("uploadFile").click();

}

function home() {
    if (confirm("로그아웃 하시겠습니까?")) {
        window.parent.location.href = "Login.html";
    }
}
var check1 = "False";
var check2 = "False";

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

// 아이디 중복체크
function checkID() {
    createRequest();

    var id = document.getElementById("id").value;

    var qry = "check=" + "check" + "&id=" + id;
    var url = "checkID.jsp?";

    request.open("POST", url, true);
    request.onreadystatechange = IDupdatePage;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
}
function IDupdatePage() {
    if (request.readyState == 4) {
        var check = request.responseText;
        if (check.includes("false")) {
            alert("이미 존재하는 아이디 입니다.");
        }
        else {
            alert("사용 가능한 아이디 입니다.");
            check1 = "True"
        }
    }
}

// 닉네임 중복체크
function checkName() {
    createRequest();

    var name = document.getElementById("name").value;

    var qry = "check=" + "check" + "&name=" + name;
    var url = "checkName.jsp?";

    request.open("POST", url, true);
    request.onreadystatechange = NameupdatePage;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
}
function NameupdatePage() {
    if (request.readyState == 4) {
        var check = request.responseText;
        if (check.includes("false")) {
            alert("이미 존재하는 닉네임 입니다.");
        }
        else {
            alert("사용 가능한 닉네임 입니다.");
            check2 = "True"
        }
    }
}

// 회원가입 부분
function RegisterBtn() {
    var pwd = document.getElementById("pwd").value;
    var pwdCheck = document.getElementById("pwdCheck").value;
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var keyword = Keyword_Return();
    var pr = document.getElementById("pr").value;
    var imgUrl = document.getElementById("uploadFile").value.split('\\').pop().toLowerCase();

    // 회원가입 예외처리 부분 //
    if (RegisterCheck() == "False")
        return;
    if (pwd != pwdCheck) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }
    if (email == "" || pr == "" || keyword == "" || pwd == "" || pwdCheck == "") {
        alert("빈칸을 모두 채워주세요");
        return;
    }
    // 회원가입 예외처리 부분 //

    createRequest();
    document.getElementById("img_file").submit();
    var qry = "id=" + id + "&pwd=" + pwd + "&name=" + name
        + "&email=" + email + "&keyword=" + keyword + "&pr=" + pr + "&imgUrl=" + imgUrl;

    var url = "Register.jsp?";

    request.open("POST", url, true);
    request.onreadystatechange = movePage;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
}
function RegisterCheck() {
    if (check1 == "False" || check2 == "False") {
        alert("아이디 또는 닉네임 중복확인 바랍니다.");
        return "False";
    }
}
function movePage() {
    if (request.readyState == 4) {
        alert("가입되었습니다.");
        window.open("Login.html", "_self");
    }
}

function imgupload() {
    alert("hi");
}

function btnClick() {
    var current = event.currentTarget;
    var parent = current.parentElement;
    var pparent = parent.parentElement;
    pparent.removeChild(parent);
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
    remove.style.background = "rgba(16.000000946223736, 125.00000014901161, 219.0000021457672, 1)";
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
            /*if (selectValue.includes(parent.childNodes[i].innerText)) {
                check = false;
                break;
            }*/
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
        remove.style.background = "rgba(16.000000946223736, 125.00000014901161, 219.0000021457672, 1)";
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
    }
}

//,로 구분된 키워드 문자열 생성 후 리턴
function Keyword_Return() {
    createRequest();

    var keywordList = new Array();
    var parent = document.getElementById("keywords");

    for (var i = 0; i < parent.childElementCount; i++) {
        keywordList.push(parent.childNodes[i].innerText);
    }

    var keywordStr = "";
    for (var i = 0; i < keywordList.length; i++) {
        if (keywordStr == "") {
            keywordStr = keywordList[i];
        }
        else {
            keywordStr += "," + keywordList[i];
        }
    }

    return keywordStr;
}
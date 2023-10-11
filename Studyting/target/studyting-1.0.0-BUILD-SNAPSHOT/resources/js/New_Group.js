function btnClick() {
    var current = event.currentTarget;
    var parent = current.parentElement;
    var pparent = parent.parentElement;
    pparent.removeChild(parent);
}

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
    remove.style.fontSize = "16px";
    remove.style.marginLeft = "1%";
    remove.style.color = "rgba(255, 255, 255, 1)";
    remove.style.background = "rgb(164, 165, 165)";
    remove.style.border = "none";
    remove.style.borderRadius = "5px";
    remove.setAttribute("onclick", "btnClick(this);");

    key.innerText = selectValue;

    keyword.appendChild(key);
    keyword.appendChild(remove);


    var check = true;

    if (parent.childElementCount > 0) {
        for (var i = 0; i < parent.childElementCount; i++) {
            if (selectValue.includes(parent.childNodes[i].innerText)) {
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
}

function InputKeyword() {
    if (window.event.keyCode == 13) {
        addKeyword();
    }
}

function addKeyword() {
    var input_keyword = document.getElementById("input_keyword").value;

    if (input_keyword != "") {
        var parent = document.getElementById("keywords");
        var keyword = document.createElement("span");
        var key = document.createElement("span");
        var remove = document.createElement("input");

        remove.setAttribute("type", "button");
        remove.setAttribute("value", "X");
        remove.style.fontSize = "16px";
        remove.style.marginLeft = "1%";
        remove.style.color = "rgba(255, 255, 255, 1)";
        remove.style.background = "rgb(164, 165, 165)";
        remove.style.border = "none";
        remove.style.borderRadius = "5px";
        remove.setAttribute("onclick", "btnClick(this);");

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
    }
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

function Create_Group() {

    var Gname = document.getElementById("gname_text").value;

    if (Gname == "") {
        alert("그룹명을 입력해주세요.");
    }

    else {
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

        var gname = document.getElementById("gname_text").value;

        var qry = "gname=" + gname + "&gkeyword=" + keywordStr;
        var url = "New_Group.jsp?";

        request.open("POST", url, true);
        request.onreadystatechange = updatePage;
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
        request.send(qry);
    }
}

function updatePage() {
    if (request.readyState == 4) {
        alert("생성되었습니다.");
        opener.location.reload();
        window.close();
    }
}
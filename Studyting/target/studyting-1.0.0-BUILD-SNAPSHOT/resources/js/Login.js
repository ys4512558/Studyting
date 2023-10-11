window.onload = function () {
    var btn_Register = document.getElementById("btn_Register");

    btn_Register.addEventListener("click", Register());
}
function Register() {
    window.open("/register", "_self");
}

function Login() {
    var id = document.getElementById("id");
    var pwd = document.getElementById("pwd");
    
}


// function createRequest() {
//     try {
//         request = new XMLHttpRequest();
//     }
//     catch (failed) {
//         request = null;
//     }
//     if (request == null) {
//         alert("Error creating request object!");
//     }
// }
//
// function Login() {
//     createRequest();
//
//     var id = document.getElementById("id").value;
//     var pwd = document.getElementById("pwd").value;
//
//     var qry = "id=" + id + "&pwd=" + pwd;
//
//     var url = "Login.jsp?";
//
//     request.open("POST", url, true);
//     request.onreadystatechange = updatePage;
//     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
//     request.send(qry);
// }
//
// function updatePage() {
//     if (request.readyState == 4) {
//         var check = request.responseText;
//         if (check.includes("true")) {
//             alert("로그인 성공");
//             window.open("main_page.html", "_self");
//         }
//         else {
//             alert("ID, PWD를 확인해주세요");
//         }
//
//     }
// }
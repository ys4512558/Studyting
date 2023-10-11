var Cname;
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
    request = new XMLHttpRequest();
  }
  catch (failed) {
    request = null;
  }
  if (request == null) {
    alert("Error creating request object!");
  }
}

function createRequest3() {
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




function moveGroup(e) { //다른 그룹 누르면 발동 누른 그룹 gidx저장함
  localStorage.setItem("gidx", e.id);
  //e.id);
  window.open("groupView.html", "_self");
}


function getGroupPosts() { //현재 보여주는 그룹의 포스트들 보여줌

  return new Promise(function (resolve, reject) {
    createRequest();

    const gidx = localStorage.getItem("gidx");
    console.log(gidx);


    var url = "getGroupPost.jsp?";
    var qry = "gidx=" + gidx;


    request.open("POST", url, true);
    request.onload = () => {

      if (request.readyState == 4) {

        const jsonObj = request.responseText;
        const posts = JSON.parse(jsonObj);
        console.log(posts);


        for (var i = 0; i < posts.length; i++) {
          var middle_item = document.createElement("section");
          middle_item.className = 'middle_item';
          var middle_item_profile = document.createElement("section");
          middle_item_profile.className = 'middle_item_profile';

          var img = document.createElement("img");
          img.setAttribute("id", "profile_img");
          img.setAttribute("src", "http://" + window.location.hostname + ":8080/img/" + posts[i].imgUrl);
          console.log(window.location.hostname);
          middle_item_profile.appendChild(img);
          middle_item_profile.appendChild(document.createElement("a"));
          middle_item_profile.appendChild(document.createElement("br"));


          var profile_id = document.createElement("span");
          profile_id.setAttribute("id", "profile_id");
          profile_id.innerText = posts[i].name;
          middle_item_profile.appendChild(profile_id);
          middle_item.appendChild(middle_item_profile);
          var middle_item_text = document.createElement("span");
          middle_item_text.setAttribute("class", "middle_item_text");
          middle_item_text.innerHTML = posts[i].text; // 방금수정
          middle_item.appendChild(middle_item_text);
          document.getElementById("middle_post_section").appendChild(middle_item);
          document.getElementById("middle_post_section").scrollTop
            = document.getElementById("middle_post_section").scrollHeight;
          console.log(posts[i])

        }
        resolve("next");
      }
    };


    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
    request.send(qry);
  }
  );
}



function getGroupMembers() { //현재 보여주는 그룹의 멤버들을 오른쪽에 뿌림
  //console.log("member add runs");
  return new Promise(function (resolve, reject) {
    createRequest();
    var url = "getGroupsMember.jsp?";
    const gidx = localStorage.getItem("gidx");

    var qry = "gdix=" + gidx;

    //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");

    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");

    request.onload = () => {
      if (request.readyState == 4) {
        const jsonObj = request.responseText;
        const members = JSON.parse(jsonObj);
        //console.log("111"+members);


        for (var i = 0; i < members.length; i++) {
          var right_side_bar_item = document.createElement("section");
          right_side_bar_item.className = 'right_side_bar_item';
          var a = document.createElement("a");
          a.style.border = "1px solid darkgrey";
          a.style.borderRadius = "5px";
          a.setAttribute("onClick", "");
          a.setAttribute("id", members[i].gidx);
          a.innerText = members[i].name

          var out_member_btn = document.createElement("button");
          console.log("Cname = " + Cname);
          console.log("gmaster = " + members[i].gmaster);

          if (members[i].gmaster == Cname && (a.innerText != members[i].gmaster)) {
            console.log("gmaster in!")
            out_member_btn.setAttribute("type", "button");
            out_member_btn.setAttribute("class", "out")
            out_member_btn.innerText = "추방";

            out_member_btn.onclick = (e) => {

              if (confirm("추방 하시겠습니까?")) {
                createRequest3();

                var username = e.target.parentElement.childNodes[2].innerText;
                const gidx = localStorage.getItem("gidx");
                console.log("username = " + username);
                console.log("gidx = " + gidx);

                var url = "outGroupUser.jsp?" + "name=" + username + "&gidx=" + gidx;
                //var qry2 = "name=" +username +"&gidx="+gidx;
                //console.log(qry2);
                request.open("POST", url, true);
                request.send(null);

                request.onload = (username) => {
                  if (request.readyState == 4) {
                    location.reload();
                  }
                }
              }
            };
          }

          //console.log(groups[i])
          //console.log(groups[i].gname)
          var right_side_bar_img = document.createElement("img");
          right_side_bar_img.setAttribute("class", "right_side_bar_img");
          right_side_bar_img.setAttribute("src", "http://" + window.location.hostname + ":8080/img/" + members[i].imgUrl);
          right_side_bar_item.appendChild(right_side_bar_img);
          right_side_bar_item.appendChild(document.createElement("br"));
          right_side_bar_item.appendChild(a);
          right_side_bar_item.appendChild(document.createElement("br"));
          if (members[i].gmaster == Cname && (a.innerText != members[i].gmaster)) {
            right_side_bar_item.appendChild(out_member_btn);
          }
          document.getElementById("right_side_bar").appendChild(right_side_bar_item);



        }
        resolve("next");
      }


    };
    request.send(qry);
  });
}







function onLoad() { //문서가 로드되면 실행
  document.getElementById("group_title").textContent = localStorage.getItem("gname");
  getCookie("name");
  Promise.resolve()//이건 비동기로 실행되는 xmlhttp들을 동기로 만들겠다는 거임
    //.then(getUserGroups) //왼쪽에 가입한 그룹들 뿌리기
    .then(getGroupPosts) //가운데에 그룹 내 포스트 뿌리기
    .then(getGroupMembers); //오른쪽에 그룹 내 멤버들 뿌리기
}

function invite() {
  var gmaster = localStorage.getItem("gmaster");
  if (gmaster == Cname) {
    window.open("Invite_Group.html", '_blank', "width = 650, height = 550, toolbar=no,"
      + "menubar=no, location=no,scrollbars=no, resizable=no");
  } else {
    alert("방장만 사용할 수 있습니다!");
  }

}
function request_group() {
  var gmaster = localStorage.getItem("gmaster");
  if (gmaster == Cname) {
    window.open("groupok.html", '_blank', "width = 1300, height = 500, toolbar=no,"
      + "menubar=no, location=no,scrollbars=no, resizable=no");
  } else {
    alert("방장만 사용할 수 있습니다!");
  }

}
function group_delete() {
  var gmaster = localStorage.getItem("gmaster");
  if (gmaster == Cname) {
    alert("준비중");
  } else {
    alert("방장만 사용할 수 있습니다!");
  }
}
// 그룹 퇴장 부분 //
function group_out() {
  var gmaster = localStorage.getItem("gmaster");
  if (gmaster == Cname) {
    alert("방장은 그룹을 나갈 수 없습니다.");
  } else {
    console.log(Cname);
    if (confirm("현재그룹을 나가시겠습니까?")) {
      createRequest4();

      const gidx = localStorage.getItem("gidx");

      var qry = "name=" + Cname + "&gidx=" + gidx;
      var url = "selfoutgroup.jsp?";

      request.open("POST", url, true);
      request.onreadystatechange = group_out_updatePage;
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
      request.send(qry);
    }
  }
}
function group_out_updatePage() {
  if (request.readyState == 4) {
    window.parent.location.reload();
    alert("그룹에서 퇴장하셨습니다.");
  }
}
// 그룹 퇴장 부분 //

function postwrite() {
  // 날짜 가져오는 부분 //
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + (date.getDate())).slice(-2);
  var dateStr = year + '-' + month + '-' + day;
  // 날짜 가져오는 부분 //

  createRequest2();

  var gidx = localStorage.getItem("gidx");
  var text = document.getElementById("text").value + "<br><br>작성일: " + dateStr;

  var qry = "gidx=" + gidx + "&text=" + text + "&name=" + Cname;

  var url = "postwrite.jsp?";

  request.open("POST", url, true);
  request.onreadystatechange = PostupdatePage;
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "charset=UTF-8");
  request.send(qry);
}

function PostupdatePage() {
  if (request.readyState == 4) {
    location.reload();
  }
}
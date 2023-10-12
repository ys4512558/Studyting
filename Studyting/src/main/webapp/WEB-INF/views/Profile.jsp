<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value='/resources/css/Profile.css'/>">
    <script src="<c:url value='/resources/js/Profile.js'/> "></script>

</head>

<body onload="init()">
<span class="e106_231">
        <span class="e106_232">내정보</span>
        <span class="e106_232_1">닉네임</span>
        <input type="text" id="name" class="e106_232_2" readonly>
        <input type="button" class="e106_232_3" onclick="home();" value="로그아웃">

        <span class="e106_232_4">키워드</span>
        <span class="keywordSelect">
            <input class="e106_232_5" type="text" id="input_keyword" placeholder="직접 입력" onkeyup="InputKeyword()">
            <select class="e106_232_10" id="keyword" name="keyword" onchange="SelectKeyword()">
                <option value="">키워드 선택</option>
                <option value="IT">IT</option>
                <option value="웹프로그래밍">웹프로그래밍</option>
                <option value="자격증">자격증</option>
                <option value="자바">자바</option>
                <option value="스위프트">스위프트</option>
                <option value="컴공">컴공</option>
                <option value="C#">C#</option>
            </select>
            <input class="e106_232_9" type="button" id="add_keyword" value="추가" onclick="addKeyword()">
        </span>
        <span class="keybox">
            <span id="keywords"></span>
        </span>

        <input type="button" class="e106_232_6" onclick="repr()" value="수정">
        <span class="e106_232_7">자기소개</span>
        <input type="text" id="pr" class="e106_232_8" readonly>
        <img id="profil_img" class="e106_235">
        <input type="button" class="e106_235_1" onclick="reimg()" value="변경">


        <form id="img_file" action="ProfilUpload.jsp" method="post" enctype="multipart/form-data" target="blankifr">
            <input type="file" class="v102_612" name="uploadFile" id="uploadFile" hidden>
            <input type="submit" class="v102_611" value="이미지 등록" hidden>
        </form>
    </span>
<span class="e106_233">
        <span class="e106_234">초대받은 그룹 목록</span>
        <span class="e106_236" id="groups">
        </span>
    </span>
</body>
<iframe name='blankifr' style='display:none;'></iframe>

</html>

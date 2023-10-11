<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
    <link rel="stylesheet" href="<c:url value='/resources/css/New_Group.css'/>">
    <script src="<c:url value='/resources/js/New_Group.js'/> "></script>

</head>

<body>
<header>
    <span class="title">새 그룹 만들기</span>
</header>
<section>
    <article id="middle">
        <span class="span2" id="gname"> 그룹명 </span>
        <input type="text" id="gname_text">
        <input class="createbtn" type="button" value="생성하기" id="CreateBtn" onclick="Create_Group()">
        <hr>
        <input class="input" type="text" id="input_keyword" placeholder="직접 입력" onkeyup="InputKeyword()">
        <select class="select" id="keyword" name="keyword" onchange="SelectKeyword()">
            <option value="">키워드 선택</option>
            <option value="IT">IT</option>
            <option value="웹프로그래밍">웹프로그래밍</option>
            <option value="자격증">자격증</option>
            <option value="자바">자바</option>
            <option value="스위프트">스위프트</option>
            <option value="컴공">컴공</option>
            <option value="C#">C#</option>
        </select>
        <input class="addbtn" type="button" id="add_keyword" value="추가" onclick="addKeyword()"> <br>
        <br> <span id="keywords"></span>
    </article>
</section>

</body>

</html>

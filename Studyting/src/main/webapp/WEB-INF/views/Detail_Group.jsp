<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
    <link rel="stylesheet" href="<c:url value='/resources/css/Detail_Group.css'/>">
    <script src="<c:url value='/resources/js/Detail_Group.js'/> "></script>
</head>

<body onload="init()">
<header>
    <span class="title" id="gname"></span>
</header>
<section>
    <article id="middle">
        <span class="title" id="gkeyword"> Keyword </span>
        <hr>
        <span id="keywords">
            </span>
        <br>
        <input type="button" value="가입신청" id="applyBtn" onclick="Request()">
    </article>
</section>

</body>

</html>
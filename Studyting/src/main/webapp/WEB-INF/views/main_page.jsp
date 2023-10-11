<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value='/resources/css/main_page.css'/>">
    <script src="<c:url value='/resources/js/main_page.js'/> "></script>

</head>

<body onload="onLoad()">
<input type="hidden" name="NAME" id="NAME" value="변수값">
<span class=e106_229>
        <span class="e106_230"></span>
        <span class="e106_251">StudyTing</span>
        <span class="e106_237">
            <a onclick="changeIframeUrl('mypage.html')" class="e106_237_1">마이페이지</a>
            <a onclick="changeIframeUrl('Search.html')" class="e106_237_2">그룹검색</a>
            <span class="e106_238">

            </span>
        </span>
        <input class="left_side_bar_item" type="button" id="AddBtn" value="+" onclick="Add_Group()">
        <iframe src="mypage.html" name="my_frame" id="my_frame"></iframe>
    </span>
</body>

</html>
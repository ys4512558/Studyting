<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 5:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="<c:url value='/resources/css/Search.css'/>">
    <script src="<c:url value='/resources/js/Search.js'/> "></script>
</head>

<body onload="Search()">
<h1 class="middle_title_text">스터디 그룹 검색</h1>
<span class="middle_search">
			<span class="search_label"> 그룹명 </span>
			<input type="text" class="middle_search_gname" id="search_gname">

			<span class="search_label2"> 키워드 </span>
			<input type="text" class="middle_search_gkeyword" id="search_gkeyword">

			<input class="msb" type="button" value="검색" onclick="Search()">
		</span>
<span class="middle_article" id="search_group"></span>
</body>
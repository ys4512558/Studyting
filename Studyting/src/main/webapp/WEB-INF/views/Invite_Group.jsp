<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="<c:url value='/resources/css/Invite_Group.css'/>">
    <script src="<c:url value='/resources/js/Invite_Group.js'/> "></script>
</head>

<body onload="Search()">
<header>
    <h1 class="title">그룹 초대</h1>
</header>
<span class="middle_search">
			<span class="search_label"> 닉네임
				<input type="text" class="name" id="search_name">
			</span>
			<span class="search_label2"> 키워드
				<input type="text" class="keyword" id="search_keyword">
			</span>
			<input class="msb" type="button" value="검색" onclick="Search()">
		</span>
<article class="middle_article" id="search_group">
    <table class="Result_table">
        <tbody id="List">
        <tr class="Result_tr">
        </tr>
        </tbody>
    </table>
</article>
<article class="middle_article2">
    자기소개<br>
    <span id="pr"></span>
</article>
</body>
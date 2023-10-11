<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">

    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="<c:url value='/resources/css/groupView.css'/>">
    <script src="<c:url value='/resources/js/groupView.js'/>"></script>
</head>

<body onload="onLoad()">

<!--
middle이 가운데
가운데는 middle_post_section 이랑 middle_post로 나뉘어져있음
그룹 내 포스트들은 middle_post_section에 뿌려지게됨
middle_post_section내에 뿌려지는 글들은 middle_item 클래스로 css맞춰놓음
html예제랑 코드 예제는 이 문서에서  middle_item 검색
-->
<article class="middle">
    <span id="group_title" name="group_title" class="middle_title_text">
    </span>
    <input type="button" value="그룹삭제" onclick="group_delete()" class="middle_btn1" style="visibility : hidden;">
    <input type="button" value="그룹퇴장" onclick="group_out()" class="middle_btn2">
    <article id="middle_post_section">


    </article>

    <article class="middle_post">
        <input type="text" name="" id="text" class="middle_post_message">
        <!--
              <span class="middle_post_message">Direct Messages</span>

         -->
    </article>

    <input type="button" class="send_btn" onclick="postwrite()" value="작성">

</article>
<!--
그룹 멤버들 뿌리는 곳임

-->
<article id="right_side_bar">


</article>
<input type="button" class="invite_btn" onclick="invite()" value="그룹초대">
<input type="button" class="request_btn" onclick="request_group()" value="신청목록">
</body>
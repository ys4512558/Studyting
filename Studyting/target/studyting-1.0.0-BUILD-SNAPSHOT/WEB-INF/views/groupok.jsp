<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="<c:url value='/resources/css/Login.css'/>">
    <script src="<c:url value='/resources/js/groupok.js'/> "></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body onload="init()">
<span class="e106_233">
        <span class="e106_234">신청자 목록</span>
        <span class="e106_236" id="groups1">
        </span>
    </span>
<span class="e106_237">
        <span class="e106_238">유저검색</span>
        <span class="search_label"> 닉네임
            <input type="text" class="name" id="search_name">
        </span>
        <input class="msb" type="button" value="검색" onclick="Search()">
        <span class="e106_239" id="groups2">
            <span class="middle_article" id="search_group">
                <table class="Result_table">
                    <tbody id="List">
                        <tr class="Result_tr">
                        </tr>
                    </tbody>
                </table>
            </span>
            <span class="middle_article2">
                자기소개<br>
                <span id="pr"></span>
            </span>
        </span>
    </span>
</body>

</html>
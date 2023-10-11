<%-- Created by IntelliJ IDEA. User: admin Date: 2023-10-11 Time: 오후 4:38 To change this template use File | Settings |
    File Templates. --%>
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


            <html lang="en">

            <head>
                <meta charset="utf-8">

                <title>Login</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="<c:url value='/resources/css/Login.css'/>">
                <script src="<c:url value='/resources/js/Login.js'/>"></script>
            </head>

            <body>
                <span class=e106_229>
                    <span class="e106_230"></span>
                    <span class="e106_251">StudyTing</span>
                    <form class="e106_231" action="<c:url value='/login/login'/>" method="post">
                        <span class="e106_232">로그인</span>
                        <span>${requestScope.msg}</span>
                        <span class="e106_234">아이디</span>
                        <input class="e106_233" id="id" type="text" style="text-transform: lowercase;" name="id">
                        <span class="e106_236">비밀번호</span>
                        <input class="e106_235" id="pwd" type="password" style="text-transform: lowercase;" name="pwd">
                        <button class="e106_244" type="submit" id="btn_Register">Register</button>
                        <button class="e106_246" type="submit" id="btn_Login">Login</button>
                    </form>
                </span>
            </body>

            </html>
<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2023-10-11
  Time: 오후 4:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Register</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/Register.css">
    <link rel="stylesheet" href="<c:url value='/resources/css/Register.css'/> ">
    <script src="<c:url value='/resources/js/Register.js'/>"></script>
</head>

<body>
<span class="v102_551">
        <span class="v102_552">

        </span><span class="v106_253">StudyTing</span>
        <span class="v102_613">
                <span class="v102_553"></span>
                <span class="v102_554">회원가입</span>

                <input type="text" class="v102_608" id="name" style="text-transform: lowercase;">
                <span class="v102_609">닉네임</span>
                <input type="button" class="v102_614" value="중복확인" onclick="checkName()">

                <input type="text" class="v102_555" id="id" style="text-transform: lowercase;">
                <span class="v102_557">아이디</span>

                <input type="button" class="v102_556" value="중복확인" onclick="checkID()">

                <input type="password" class="v102_559" id="pwd" style="text-transform: lowercase;">
                <span class="v102_561">비밀번호</span>

                <input type="password" class="v102_563" id="pwdCheck" style="text-transform: lowercase;">
                <span class="v102_565">비밀번호 확인</span>

                <input type="email" class="v102_567" id="email">
                <span class="v102_569">이메일</span>

                <input type="text" class="v102_571" id="pr">
                <span class="v102_573">자기소개</span>

                  <form id="img_file" action="ProfilUpload.jsp" method="post" enctype="multipart/form-data" target="blankifr">
            		<input type="file" class="v102_612"  name="uploadFile" id="uploadFile">

                   <input  type="submit" class="v102_611" value="이미지 등록" hidden >
                   <span class="v102_610">프로필 이미지 설정</span>
                </form>
            <!--
            <input type="text" class="v102_606" id="keyword">
            <span class="v102_607">노출 키워드</span>-->
                <span class = "v102_607"> 노출 키워드 </span>
                <span class = "v102_615">
                    <select class = "v102_607_1" id="keyword" name="keyword" onchange="SelectKeyword()">
                        <option value="">키워드 선택</option>
                        <option value="IT">IT</option>
                        <option value="웹프로그래밍">웹프로그래밍</option>
                        <option value="자격증">자격증</option>
                        <option value="자바">자바</option>
                        <option value="스위프트">스위프트</option>
                        <option value="컴공">컴공</option>
                        <option value="C#">C#</option>
                    </select>
                    <input type="text" class = "v102_607_2" id="input_keyword" placeholder="직접 입력" onkeyup="InputKeyword()">
                    <input type="button" class = "v102_607_3" id="add_keyword" value="추가" onclick="addKeyword()">
                    <br> <br>
                    <span id="keywords"></span>
				</span>
                <input type="button" class="v102_575" value="회원가입" onclick="RegisterBtn()">
        </span>
    </span>
</body>
<iframe name='blankifr' style='display:none;'></iframe>
</html>

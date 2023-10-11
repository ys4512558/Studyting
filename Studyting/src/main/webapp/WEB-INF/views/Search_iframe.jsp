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

    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="<c:url value='/resources/css/Search_iframe.css'/>">
    <script src="<c:url value='/resources/js/Search_iframe.js'/> "></script>

</head>

<body onload="Search()">
<section>
    <article class="middle_article" id="search_group">
        <table class="Result_table">
            <tbody id="List">
            <tr class="Result_tr">
            </tr>
            </tbody>
        </table>
    </article>
</section>
</body>
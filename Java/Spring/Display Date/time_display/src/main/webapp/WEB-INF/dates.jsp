<%@ page language="java" contentType="text/html; charset=windows-1256"
         pageEncoding="windows-1256" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="windows-1256">
    <link rel="stylesheet" href=""/>
    <title>The Date</title>
</head>
<body>

<h1>The Date :</h1>
<p>Date :  <c:out value="${getdate}" /></p>
<p class="hje" onload="runMsg()">The time is: <%= new Date() %></p>
</body>
</html>
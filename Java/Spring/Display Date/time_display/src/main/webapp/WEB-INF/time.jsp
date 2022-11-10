<%@ page language="java" contentType="text/html; charset=windows-1256"
         pageEncoding="windows-1256" import="java.time.*" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="windows-1256">
    <link rel="stylesheet" href=""/>
    <title>The Time</title>
</head>
<body>
<h1>The Time :</h1>
<p>Hour Times :  <c:out value="${gettime}" /></p>
<p class="hje" onload="runMsg2()">The local time is <%=  LocalTime.now() %></p>

</body>
</html>
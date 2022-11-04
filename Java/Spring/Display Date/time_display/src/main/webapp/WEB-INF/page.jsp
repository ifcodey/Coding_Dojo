<%@ page language="java" contentType="text/html; charset=windows-1256"
         pageEncoding="windows-1256" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="windows-1256">
    <link rel="stylesheet" href=""/>
    <title>The Page</title>

    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="styles.css"/>

    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
<h1>The Time in Each Pages</h1>
<p><a href="dates">The Date of Page Shows</a></p>

<p><a href="times">The Time of Page Shows</a></p>
<%--<p>Hour Times :  <c:out value="${gets}" /></p>--%>

</body>
</html>
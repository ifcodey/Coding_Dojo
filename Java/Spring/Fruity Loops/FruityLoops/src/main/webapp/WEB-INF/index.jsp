<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Dojo Page</title>

    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>

    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="../../resources/static/main.css"/>

    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>

<h1>Fruity Show</h1>
<table border=2 class="table">
    <tr>
        <th>Name</th>
        <th>Price</th>
    </tr>
    <c:forEach var="oneDojo" items="${fruits1}">
        <tr>
            <td scope="row"><c:out value="${oneDojo.name}"></c:out></td>
            <td scope="row"><c:out value="${oneDojo.price}"></c:out></td>
        </tr>
    </c:forEach>
</table>

</body>
</html>
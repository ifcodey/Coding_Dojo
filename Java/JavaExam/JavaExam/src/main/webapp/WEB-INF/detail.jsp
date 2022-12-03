<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<!-- c:out ; c:forEach ; c:if -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!-- Formatting (like dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Qa3ati</title>

    <!-- YOUR own local CSS -->
    <link rel="stylesheet" type="text/css" href="">
    <script type="text/javascript" src="js/app.js"></script>


    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/main.css"/>
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">

</head>
<body>

<section class=".d-flex p-2 justify-content-center m-2">
    <h3>Trip Name : ${trip.title}</h3>
    <p>Created by : ${trip.user.userName}</p>
    <p>Total Participate : ${trip.capacityTotal}</p>
    <p>Detail : ${trip.detail}</p>


    <table class="table">
        <thead>
        <tr>

            <th scope="col">Name</th>
            <th scope="col">Join Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>

        <tbody>
        <c:forEach var="vistor" items="${assignedUsers}">
        <tr>
            <td>${vistor.userName}</td>
<%--            <td><fmt:formatDate value="${tu.jointdate}" pattern="yyyy-MM-dd HH:mm"/></td>--%>
            <td>${tu.jointdate}</td>

            <td><c:if test="${vistor.id == thisUser.id}">
                <a href="/leave/${trip.id}"> Remove</a>
            </c:if></td>
        </c:forEach>



        </tr>
    </table>
    <br><br>
    <c:if test="${trip.user.id == thisUser.id}">
    <a href="/trip/edit/${trip.id}" class="btn btn-primary"> Update</a>
    </c:if>

</section>

</body>
</html>
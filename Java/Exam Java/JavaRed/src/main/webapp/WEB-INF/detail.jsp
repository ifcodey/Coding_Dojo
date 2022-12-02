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

<section>
    <h2>${single_trip.title} Trip</h2>
    <h5>Created by :${single_trip.user.userName}</h5>
    <h5>Total Participate :${single_trip.capacityTotal}</h5>
    <h5>${single_trip.detail}</h5>

    <table class="table">
        <thead>
        <tr>

            <th scope="col">Name</th>
            <th scope="col">Join Date</th>
            <th scope="col">Action</th>
        </tr>
        </thead>

        <tbody>
        <c:forEach var="trip" items="${assignedUsers}">
        <tr>
            <td>${trip.title}</td>
            <td><fmt:formatDate value="${trip.createdAt}" pattern="yyyy-MM-dd HH:mm"/></td>
            <a href="/delete/${trip.id}"> Remove</a>

        </tr>
        </c:forEach>
    </table>
    <br><br>
    <a href="/trip/edit/${single_trip.id}" class="btn btn-primary"> Update</a>


</section>

</body>
</html>
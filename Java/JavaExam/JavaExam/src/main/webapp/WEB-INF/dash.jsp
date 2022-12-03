<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
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

<h3 class="ml-4 mt-2">
    <span style="color: #9900ff;">Welcome </span>${thisUser.userName }
</h3>

<section class=" d-flex p-1 flex-row-reverse .d-flex p-2 m-2" >
    <div class="align-items-end">
        <span class="p-2"><a href="/logout">Logout</a></span>
    </div>
</section>

<section class=".d-flex p-2 justify-content-center m-2">
    <h4>&nbsp;&nbsp;&nbsp;&nbsp;Trips</h4>
    <table class="table">
        <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Trip Title</th>
            <th scope="col">Creator</th>
            <th scope="col">participate</th>
            <th scope="col">Action</th>
        </tr>
        </thead>

        <tbody>
        <c:forEach var="trip" items="${all_trip}">
        <tr>
            <td>${trip.id}</td>
            <td><a href="trip/${trip.id}">${trip.title}</a></td>
            <td>${trip.user.userName}</td>
            <td> ${fn:length(trip.vistors)}/ ${trip.capacityTotal}</td>

            <td>
                <c:choose>
                    <c:when test="${trip.vistors.contains(thisUser)}">
                        <a href="/leave/${trip.id}"> Leave </a>
                    </c:when>

<%--                    <c:when test="${!(trip.vistors.contains(thisUser))}">--%>
<%--                        <a href="/join/${trip.id}"> Join </a>--%>
<%--                    </c:when>--%>

                    <c:otherwise>
                        <a href="/join/${trip.id}"> Join </a>
                    </c:otherwise>

                </c:choose>


            </td>
        </tr>
        </c:forEach>
    </table>
    <a href="/trip/add" class="btn btn-primary"> Add New Trip</a>

</section>

</body>
</html>
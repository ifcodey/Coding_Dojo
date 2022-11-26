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

<section class=" d-flex p-1 flex-row-reverse">
    <div class="align-items-end">
        <span class="p-2"><a href="/logout">Logout</a></span>
        <span class="p-2"><a href="/dash">Home</a></span>
    </div>
</section>

<section>

    <h3>${single_team.name}</h3>
    <h3>${single_team.level}</h3>
    <h3>${single_team.day}</h3>

    <ul>
        <c:forEach var="user" items="${assignedUsers}">
            <li><c:out value="${user.userName}"></c:out></li>
        </c:forEach>
    </ul>

    number of players is :${single_team.players.size() }
    <br>
    <br>
    <hr>
    <p>add player</p>
    <form:errors path="players" class="error"/>

    <hr>
    <form:errors path="players" class="error"/>

    <c:if test="${single_team.players.size() < 9}">

        <form action="/team/${id}" method="post">

            <select name="userId" id="userId" class="input">

                <c:forEach var="user" items="${unassignedUsers}">
                    <option value="${user.id}">${user.userName}</option>
                </c:forEach>

            </select>

            <input class="input" class="button" type="submit" value="Add"/>

        </form>

    </c:if>

    <c:if test="${single_team.players.size() >=9}">
        <p style="color:red;">team is full! you cant add more than 9</p>
    </c:if>

</section>

</body>
</html>
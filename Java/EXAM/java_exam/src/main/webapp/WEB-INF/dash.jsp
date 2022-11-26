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

<h3 class="ml-4 mt-2">
    <span style="color: #9900ff;">Welcome </span>${thisUser.userName }
</h3>

<section class=" d-flex p-1 flex-row-reverse">
    <div class="align-items-end">
        <span class="p-2"><a href="/logout">Logout</a></span> <span
            class="p-2"><a href="/team/new">+ Add New Team</a></span>
    </div>
</section>

<section>
    <c:choose>

        <c:when test="${all_team.size() == 0}">
            <h3>No there any team in database.</h3>
            <div class="button-wrp">
                <a href="/team/add">Add team</a>
            </div>
        </c:when>

        <c:otherwise>

            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Level</th>
                    <th scope="col">day</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>

                <tbody>
                <c:forEach var="team" items="${all_team}">
                <tr>
                    <td>${team.id}</td>
                    <td><a href="team/${team.id}">${team.name}</a></td>
                    <td>${team.level}</td>
                    <td>${team.day}</td>
                    <td><fmt:formatDate value="${team.createdAt}" pattern="yyyy-MM-dd HH:mm"/></td>
                    <td><fmt:formatDate value="${team.updatedAt}" pattern="EEEE-dd-MMMM-yyyy"/></td>

                    <div class="inline-flex">
                        <td>

                            <c:choose>

                                <c:when test="${user_id == team.user.id}">
                                    <form action='/delete/<c:out value="${team.id}"/>' method="post" class="delete">
                                        <input type="hidden" name="_method" value="delete">
                                        <input type="submit" value="Delete" class="btn btn-danger">
                                    </form>
                                </c:when>

                                <c:otherwise>
                                    <p>No Delete Accessibility</p>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${user_id == team.user.id}">
                                    <a href="/team/edit/${team.id}" class="btn btn-primary"> Update</a>
                                </c:when>

                                <c:otherwise>
                                    <p>| No Update Accessibility</p>
                                </c:otherwise>

                            </c:choose>
                        </td>
                    </div>
                </tr>

                </c:forEach>
            </table>
        </c:otherwise>
    </c:choose>
</section>

</body>
</html>
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
    <meta charset="windows-1256">
    <!-- YOUR own local CSS -->
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script type="text/javascript" src="js/app.js"></script>


    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/main.css"/>
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
<section class=" d-flex p-2 flex-row-reverse">
    <div class="align-items-end">
        <span class="p-2"><a href="/logout">Logout</a></span> <span
            class="p-2"><a href="/home">Home</a></span>
    </div>
</section>

<div class=".d-flex p-2 justify-content-center m-5">

    <form:form method="post" action="/team/new" modelAttribute="team_form">
        <div>
            <table class="table">

                <tr>
                    <th scope="col"><form:label path="name"> Name:</form:label>
                        <form:errors path="name" class="error" style="color:red;"/></th>
                    <th>
                        <form:input path="name" type="text" style="width:500px; "/>
                    </th>
                </tr>

                <tr>
                    <th scope="col">
                        <form:label path="level"> Level:</form:label>
                        <form:errors path="level" class="error" style="color:red;"/>
                    </th>
                    <th>
                        <form:input path="level" type="text" style="width:500px; "/>
                    </th>
                </tr>

                <tr>
                    <th scope="col">
                        <form:label path="day">Day :</form:label>
                        <form:errors path="day" class="error" style="color:red;"/>
                    </th>
                    <th>
                        <form:input path="day" type="text" style="width:500px; "/>
                    </th>
                    <!-- save data for user attribute how add book -->
                        <%--                    <form:input type="hidden" value="${userLogin_id}" path="user"/>--%>
                </tr>

            </table>
            <input type="submit" value="Submit" class="btn btn-primary"/>
        </div>
    </form:form>
</div>
</body>
</html>

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
    <title>Adding</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script type="text/javascript" src="js/app.js"></script>

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

<div class=".d-flex p-2 justify-content-center m-5">

    <form:form method="post" action="/trip/new" modelAttribute="trip">
        <div>
            <table class="table">

                <tr>
                    <th scope="col"><form:label path="title"> Title:</form:label>
                        <form:errors path="title" class="error" style="color:red;"/></th>
                    <th>
                        <form:input path="title" type="text" style="width:500px; "/>
                    </th>
                </tr>

                <tr>
                    <th scope="col">
                        <form:label path="capacityTotal"> Capacity:</form:label>
                        <form:errors path="capacityTotal" class="error" style="color:red;"/>
                    </th>
                    <th>
                        <form:input path="capacityTotal" type="number" style="width:500px; "/>
                    </th>
                </tr>

                <tr>
                    <th scope="col">
                        <form:label path="detail">Detail :</form:label>
                        <form:errors path="detail" class="error" style="color:red;"/>
                    </th>
                    <th>
                        <form:input path="detail" type="text" style="width:500px; "/>
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

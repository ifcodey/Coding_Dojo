<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Show Page</title>

    <!-- for Bootstrap CSS -->
    <%--    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />--%>

    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/style.css"/>

    <!-- For any Bootstrap that uses JS or jQuery-->
    <%--    <script src="/webjars/jquery/jquery.min.js"></script>--%>
    <%--    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>--%>

</head>
<body>
<p>
<h1>Send an Omikuji</h1>
<%--    <c:out value="${dojoName}"/>--%>
<section>


        <table>
            <tr>
                <td><p>The Number is : ${num}</p></td>
            </tr>
            <tr>
                <td><p>The City is : ${city}</p></td>
            </tr>
            <tr>
                <td><p>The Person name is : ${person}</p></td>
            </tr>
            <tr>
                <td><p>The Hobby is : ${hobby}</p></td>
            </tr>
            <tr>
                <td><p>The Living in : ${living}</p></td>
            </tr>
            <tr>
                <td><p>The Note is : ${note}</p></td>
            </tr>
        </table>

</section>
</body>
</html>

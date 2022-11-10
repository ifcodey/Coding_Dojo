<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Omikuji Page</title>

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
    <form action="/forms" method="post">
       <input type="number" min="5" max="25" name="num">
        <table>
            <tr>
                <td><label>Enter a name of any City:</label></td>
                <td><input type="text" name='city'></td>
            </tr>
            <tr>
                <td><label>Enter a name of any real person:</label></td>
                <td><input type="text" name='person'></td>
            </tr>
            <tr>
                <td><label>Enter professional endeavor or hobby:</label></td>
                <td><input type="text" name='hobby'></td>
            </tr>
            <tr>
                <td><label>Enter any type of living thing:</label></td>
                <td><input type="text" name='living'></td>
            </tr>
            <tr>
                <td><label>Say something nice to someone:</label></td>
                <td><textarea name="note" rows="5" cols="10"></textarea></td>
            </tr>
            <tr>
            <td><input type='submit' value='Send'></td>
            </tr>
        </table>
    </form>
</section>
</body>
</html>

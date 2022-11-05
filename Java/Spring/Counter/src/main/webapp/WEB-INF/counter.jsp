<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Counter Page</title>

    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="main.css"/>

    <!-- For any Bootstrap that uses JS or jQuery-->
<%--    <script src="/webjars/jquery/jquery.min.js"></script>--%>
<%--    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>--%>

</head>
<body>
    <section>
        <h3>You have visited by used session <a href="/your_server">http:/your_server</a> ${counts}</h3>
        <h3>You have visited by used model <a href="/your_server">http:/your_server</a> ${countToShow}</h3>

        <a href="/your_server">Test another visit?</a>
    </section>
</body>
</html>
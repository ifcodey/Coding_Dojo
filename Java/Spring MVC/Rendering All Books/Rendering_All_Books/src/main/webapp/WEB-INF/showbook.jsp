<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>

<html lang="en">

<head>
<meta charset="UTF-8" />
<title>Show All book</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- YOUR own local CSS -->
<link rel="stylesheet" href="main.css" />

<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>


</head>

<body>
<table class="table">

	<tr><td><h1>${book.title}</h1></td></tr>
	<tr><td><p>Description : ${book.description }</p></td></tr>
	<tr><td><p>Language : ${book.language }</p></td></tr>
	<tr><td><p>Description : ${book.numberOfPages }</p></td></tr>



</table>

</body>
</html>


</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach ; c:if -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (like dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Home</title>
<!-- YOUR own local CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="js/app.js"></script>


<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h1 style="margin-top: 10px;">New Product</h1>
		<a href="/"> Home </a>
		<hr>

		<form:form method="post" action="/addproduct" modelAttribute="product">
			<table class="table">
				<thead>
					<tr>
						<th scope="col"><form:label path="name"> Name:</form:label> <form:errors
								path="name" class="error" style="color:red;" /></th>
						<th><form:input path="name" type="text" style="width:500px; " />
						</th>
					</tr>
					<tr>
						<th scope="col"><form:label path="description"> Description:</form:label>
							<form:errors path="description" class="error" style="color:red;" />

						</th>
						<th><form:input path="description" type="text"
								style="width:500px; " /></th>
					</tr>
					<tr>
						<th scope="col"><form:label path="price"> Price:</form:label>
							<form:errors path="price" class="error" style="color:red;" /></th>
						<th><form:input path="price" type="number"
								style="width:500px; " /></th>
					</tr>
				</thead>
				<tbody>
					<tr></tr>
				</tbody>
			</table>
			<input type="submit" value="Add Product" class="btn btn-primary" />
	</div>
	</form:form>
</body>
</html>
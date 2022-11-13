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

	<h1>${product_id.name}</h1>
	<p>
		<a href="/">Home</a>
	</p>
	<hr>
	<h3>Categories:</h3>

	<%--	view category name--%>
	<ul>
		<c:forEach var="category" items="${product_id.getCategories()}">
			<li><c:out value="${category.name}"></c:out></li>
		</c:forEach>
	</ul>
	<hr>

	<%--	Form--%>
	<form action="/products/${id}" method="post">
		<h4>Add Category:</h4>

		<select name="categoryId" id="categoryId" class="input">
			<c:forEach var="category" items="${cato}">
				<option value="${category.id}">${category.name}</option>
			</c:forEach>
		</select> <input class="input" class="button" type="submit" value="Add" />

	</form>

	<%--	delete--%>
	<div class="delete">
		<form action='/product/delete/<c:out value="${product.id}"/>'
			method="post" class="delete">
			<input type="hidden" name="_method" value="delete"> <input
				type="submit" value="Delete Product" class="btn btn-danger">
		</form>
	</div>

</body>
</html>
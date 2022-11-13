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
<title>Show Category</title>
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


	<h1>${category_id.name}</h1>
	<p>
		<a href="/">Home</a>
	</p>
	<hr>

	<h3>Products:</h3>

	<%--	view Product name--%>
	<ul>
		<c:forEach var="product" items="${category_id.getProducts()}">
			<li><c:out value="${product.name}"></c:out></li>
		</c:forEach>
	</ul>
	<hr>

	<%--	Form--%>
	<form action="/category/${id}" method="post">
		<h4>Add Product:</h4>

		<select name="productId" id="productId" class="input">

			<c:forEach var="product" items="${proder}">
				<option value="${product.id}">${product.name}</option>
			</c:forEach>
		</select> <input class="input" class="button" type="submit" value="Add" />
	</form>

	<%--	delete--%>
	<div class="delete">
		<form action='/category/delete/<c:out value="${category.id}"/>'
			method="post" class="delete">
			<input type="hidden" name="_method" value="delete"> <input
				type="submit" value="Delete Catergory" class="btn btn-danger">
		</form>
	</div>

</body>


</html>
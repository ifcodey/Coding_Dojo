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

		<div id="home">
			<h1>Home Page</h1>
			<br>
			<th scope="col"><a href="/cat/news" class="btn btn-success">Add
					New Category</a></th>
			<th scope="col"><a href="/product/news"
				class="btn btn-secondary">Add New Product</a></th>
		</div>
		<hr>
		<br>

		<table class="table table-hover" style="text-align: center;">
			<thead>
				<tr>
					<th scope="col"><a href="#">Categorys</a></th>
					<th scope="col"><a href="#">Products</a></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><c:forEach var="catergory" items="${cats}">
							<li><a href="/category/${catergory.id}"> <c:out
										value="${catergory.name}"></c:out>
							</a></li>
						</c:forEach></td>

					<td><c:forEach var="product" items="${prons}">
							<li><a href="/products/${product.id}"> <c:out
										value="${product.name}"></c:out>
							</a></li>
						</c:forEach></td>
				</tr>
			</tbody>

		</table>
	</div>
</body>
</html>
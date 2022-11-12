<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Insert title here</title>
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

		<table class="table" style="text-align: center;">

			<thead>
				<tr>

					<th scope="col"><a href="#">Categorys</a></th>
					<th scope="col"><a href="#">Products</a></th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td><c:forEach var="catergory" items="${cats}">
							<li><a href="/category/${catergory.id}"><c:out
										value="${catergory.name}"></c:out></a></li>
						</c:forEach></td>

					<td><c:forEach var="product" items="${prons}">
							<li><a href="/products/${product.id}"><c:out
										value="${product.name}"></c:out></a></li>
						</c:forEach></td>
				</tr>
			</tbody>

		</table>
	</div>
</body>
</html>
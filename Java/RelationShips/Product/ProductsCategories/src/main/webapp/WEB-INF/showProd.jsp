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

	<h1>${product_id.name}</h1>
	<p>
		<a href="/">Home</a>
	</p>
	<hr>

	<h3>Categories:</h3>
	<ul>
		<c:forEach var="category" items="${product_id.getCategories()}">
			<li><c:out value="${category.name}"></c:out></li>
		</c:forEach>
	</ul>
	<hr>
	
	<form action="/products/${id}" method="post">
		<h4>Add Category:</h4>
		<select name="categoryId" id="categoryId" class="input">
		
			<c:forEach var="category" items="${cato}">
			
				<option value="${category.id}">${category.name}</option>
				
			</c:forEach>
		</select> <input class="input" class="button" type="submit" value="Add" />
	</form>
	
	<div class="delete">
		<form action='/product/delete/<c:out value="${product.id}"/>'
			method="post" class="delete">
			<input type="hidden" name="_method" value="delete"> <input
				type="submit" value="Delete Product" class="btn btn-danger">
		</form>
	</div>
	
</body>
</html>
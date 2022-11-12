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
<body>

	<h1>${category.name}</h1>
	<p>
		<a href="/">Home</a>
	</p>
	<hr>

	<h3>Products:</h3>
	<ul>
		<c:forEach var="product" items="${assignedProducts}">
			<li><c:out value="${product.name}"></c:out></li>
		</c:forEach>
	</ul>
	<hr>
	
	<form action="/category/${id}" method="post">
		<h4>Add Product:</h4>
		
		<select name="productId" id="productId" class="input">
		
			<c:forEach var="product" items="${unassignedProducts}">
				<option value="${product.id}">${product.name}</option>
			</c:forEach>
		</select> 
		<input class="input" class="button" type="submit" value="Add" />
		
	</form>
	
	<div class="delete">
		<form action='/category/delete/<c:out value="${category.id}"/>'
			method="post" class="delete">
			<input type="hidden" name="_method" value="delete"> <input
				type="submit" value="Delete Catergory" class="btn btn-danger">
		</form>
	</div>
	
</body>


</html>
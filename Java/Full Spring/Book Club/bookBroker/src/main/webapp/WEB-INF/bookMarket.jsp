<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- c:out ; c:forEach ; c:if -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
<!-- YOUR own local CSS -->
<title>Book Market</title>
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
	<section class=" d-flex p-2 flex-row-reverse">
		<div class="align-items-end">
			<span class="p-2"><a href="/logout">Logout</a></span> <span
				class="p-2"><a href="/home">Home Page</a></span>
		</div>
	</section>

	<h4>
		Welcome, <span>${currentUser.userName} </span>
	</h4>
	<p>Available Books to Borrow</p>
	<hr>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Title</th>
				<th scope="col">Author Name</th>
				<th scope="col">Owner</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${unborrowedBooks}">
				<tr>
					<td><c:out value="${book.id}"></c:out></td>
					<td><a href="/books/${book.id}"><c:out
								value="${book.title}"></c:out></a></td>
					<td><c:out value="${book.author}"></c:out></td>
					<td><c:out value="${book.user.userName}"></c:out></td>
					<c:if test="${book.user.id==user.id}">
						<td><a href="/books/edit/${book.id}">edit</a> <a
							href="/books/delete/${book.id}">delete</a></td>
					</c:if>
					<c:if test="${book.user.id!=user.id}">
						<td><a href="/bookmarket/${book.id}">borrow</a></td>
					</c:if>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<p>Books I'm borrowing..</p>
	<table class="table">
		<thead>
			<tr>
				<td>ID</td>
				<td>Title</td>
				<td>Author Name</td>
				<td>Owner</td>
				<td>Actions</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${borrowedBooks}">
				<tr>
					<td><c:out value="${book.id}"></c:out></td>
					<td><a href="/books/${book.id}"><c:out
								value="${book.title}"></c:out></a></td>
					<td><c:out value="${book.author}"></c:out></td>
					<td><c:out value="${book.user.userName}"></c:out></td>
					<td><a href="/bookmarket/return/${book.id}">return</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>

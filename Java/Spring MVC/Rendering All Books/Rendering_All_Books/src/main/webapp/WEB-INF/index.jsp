<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>

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

	<h1>All Books</h1>
	<table class="table">
		<thead>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Language</th>
				<th>Number of Pages</th>
			</tr>
		</thead>
		<tbody>
		
			<!-- loop over all the books to show the details as in the wireframe! -->
			<c:forEach var="book" items = "${books}">
			
			<tr>
	        <td> <c:out value="${book.id}"></c:out></td>
	        <td><a href="/books/${book.id }"><c:out value="${book.title}"></c:out></a> </td>
	        <td><c:out value="${book.language}"></c:out></td>
	        <td><c:out value="${book.numberOfPages}"></c:out></td>
			</tr>
			
			</c:forEach>
		
		</tbody>
	</table>

</body>
</html>




<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Language</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="main.css" />
</head>
<body>

	<div class="container">
		<table class="table table-light">
			<thead>
				<tr>
					<!-- <td>Id</td> -->
					<td>Name</td>
					<td>Creator</td>
					<td>Version</td>
					<td></td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="expense" items="${all_language}">
					<tr>
						<%-- <td>${expense.id}</td> --%>
						<td><a href="/show/${expense.id}"
							class="text-decoration-none">${expense.getName()}</a></td>
						<td>${expense.getCreator()}</td>
						<td><span>${expense.getVersion()}</span></td>
						<td><a href="/edit/${expense.id}">edit</a></td>
						<td><a href="/delete/${expense.id}">delete</a></td>
				</c:forEach>
			</tbody>
		</table>
	</div>

	<form:form action="/languages" method="post" modelAttribute="language"
		class="form form-group border container">
		<p>
			<form:label path="Name">Name</form:label>
			<form:errors path="Name" class=".text-danger" />
			<form:input class="form-control" path="Name" />
		</p>

		<p>
			<form:label path="creator">Creator</form:label>
			<form:errors path="creator" class=".text-danger" />
			<form:input class="form-control" path="creator" />
		</p>

		<p>
			<form:label path="version">Version</form:label>
			<form:errors path="version" class=".text-danger" />
			<form:input class="form-control" type="number" path="version" />
		</p>
		<input type="submit" value="Submit" class="btn btn-success" />
	</form:form>


</body>
</html>


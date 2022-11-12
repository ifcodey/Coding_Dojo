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
	<section class=" d-flex p-2 flex-row-reverse"">
		<div class="align-items-end">
			<span class="p-2"><a href="/ninjas/new">Go To ninja</a></span>
			 <span class="p-2"><a href="/dojos/new"">Go To dojo</a></span>
		</div>
	</section>
	<div class="container">
		<table class="table table-light">
			<thead>
				<tr>
					<td>Id</td>
					<td>FirstName</td>
					<td>LastName</td>
					<td>Age</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="ninja" items="${all_ninja}">
					<tr>
						<td>${ninja.id}</td>
						<td>${ninja.getFirstName()}</td>
						<td><span>${ninja.getLastName()}</span></td>
						<td><span>${ninja.getAge()}</span></td>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>
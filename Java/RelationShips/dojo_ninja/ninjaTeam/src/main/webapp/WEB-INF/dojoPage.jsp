<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Languages Display and Add</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>

	<section class=" d-flex p-2 flex-row-reverse"">
		<div class="align-items-end">
			<span class="p-2"><a href="/dashboard">Dashboard</a></span> <span class="p-2"><a
				href="/ninjas/new">Go To ninja</a></span>
		</div>
	</section>
	
	<h1>Add Dojo</h1>

	<form:form action="/adddojo" method="post" modelAttribute="dojo">
		<table>
			<tr>
				<td><form:label path="Name">Name</form:label> <form:input
						path="Name" class="form-control" /> <form:errors path="Name"
						class="red" /></td>
			</tr>
			<tr>
				<td><input type="submit" class="form-control" value="Create">
				</td>
			</tr>
		</table>
	</form:form>
</body>
</html>
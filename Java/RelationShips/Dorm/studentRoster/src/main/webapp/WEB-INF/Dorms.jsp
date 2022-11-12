<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>DORMS</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>

<section class=" d-flex p-2 flex-row-reverse">
		<div class="align-items-end">
			<span class="p-2"><a href="/dorms/new">Go To New Dorms</a></span>
			 <span class="p-2"><a href="/students/new">Go To New Student</a></span>
		</div>
	</section>
	<h1>Dorms</h1>
	<div class="container">
		<table class="table table-light">
			<thead>
				<tr>
					<td>id</td>
					<td>Dorm</td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="dorm" items="${all_dorm}">
					<tr>
						<td>${dorm.id}</td>
						<td>${dorm.getName()}</td>
						<td><a href = "/dorms/${dorm.id}"> See Student</a></td>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>
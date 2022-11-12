<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Student Roaster</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">

</head>
<body>

	<section class=" d-flex p-2 flex-row">
		<div class="align-items-end">
			<span class="p-2"><a href="/dorms">Dashboard</a></span>
		</div>
	</section>


	<div class="container">
		<h1>New Student</h1>
		
		<form:form action="/addstudent" method="post"
			modelAttribute="students" class="form form-group border">
			<P>Select Dorm:</P>
			<form:select path="dorm">
				<c:forEach var="dorm" items="${all_dorm }">
					<form:option value="${dorm.id }">${dorm.name }</form:option>
				</c:forEach>
			</form:select>

			<form:label path="name"> &nbsp; |&nbsp; Student Name &nbsp;</form:label>
			<form:errors path="name"></form:errors>
			<form:input type="text" path="name" />



			<input type="submit" class="btn btn-primary" value="Add">
		</form:form>
	</div>
  
	<!-- 
	<div class="container">
		<table class="table table-light">
			<thead>
				<tr>
					<td>id</td>
					<td>Student</td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="dorm" items="${all_dorm}">
					<tr>
						<td>${dorm.id}</td>
						<td>${dorm.getName()}</td>
						<td><a href="/remove/${dorm.id}"> Remove</a></td>
				</c:forEach>
			</tbody>
		</table>
	</div>
	-->
	
</body>
</html>
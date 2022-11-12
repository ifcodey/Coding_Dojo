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
	
		<h1>Dorm Name is : ${dorm.name }</h1>
		
		<form action="/dorms/addstudent/${dormId}" method="post" modelAttribute="studtentdorm"  class="form form-group border">
			
			<P>Select Student:</P>
			<select name="student_id">
				<c:forEach var="student" items="${all_student}">
					<option value="${student.id}">
						<c:out value="${student.name}" />
					</option>
				</c:forEach>
			</select>
			
			<input name="dorm_id" type="hidden" value="${dorm.id }">
			
			<input type="submit" class="btn btn-outline-success" value="Add">
		</form>
		
		
		
		
		<table class="table table-dark">
			<thead>
				<tr>
					<td>Student</td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
			<c:forEach var="student" items="${dormStudents }">
				<tr>
				
					<td>${student.name }</td>
					<td><a href="remove/${student.id }/${dorm.id }">Remove</a></td>
				</tr>
			</c:forEach>
			</tbody>
			
		</table>
	</div>
	
	
</body>
</html>
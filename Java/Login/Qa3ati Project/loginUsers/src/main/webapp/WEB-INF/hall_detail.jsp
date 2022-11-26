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
<meta charset="UTF-8">
<title>Qa3ati</title>

<!-- YOUR own local CSS -->
<!-- <link rel="stylesheet" type="text/css" href="login.css">
<script type="text/javascript" src="js/app.js"></script> -->


<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">

</head>
<body>
<div class = "Containors m-5">
	<!-- -----------------------------------  -->
	<!-- Reverse to Origin Page and login out -->
	<!-- -----------------------------------  -->

	<section class=" d-flex p-2 flex-row-reverse">
		<div class="align-items-end">
			<span class="p-2"><a href="/logout">Logout</a></span> <span
				class="p-2"><a href="/home">Home Page</a></span>
		</div>
	</section>

	<!-- -----------------------------------  -->
	<!-- Show User / City Name choosing -->
	<!-- -----------------------------------  -->

	<h4>- Hello Mr/Mrs :( ${hall.user.user_name} )  &nbsp;&nbsp; - The Hall in City is : ( ${hall.user.user_name} )</h4>

	<!-- -----------------------------------  -->
	<!-- Table for show hall details -->
	<!-- -----------------------------------  -->
	<hr>
	<h3 style = "text-align: center;">Hall Detail</h3>
	<table class="table"  >

		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Hall Name</th>
				<th scope="col">Hall Address</th>
				<th scope="col">Hall Price</th>
				<th scope="col">Hall Capacity</th>
				<th scope="col">Hall Description</th>
				<th scope="col">Hall Phone</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="halls" items="${unbooking_Halls}">
				<tr>
					<td><a href="/halls/${halls.id}"><c:out value="${halls.id}"></c:out></a></td>
					<td><c:out value="${halls.hall_name}"></c:out></td>
					<td><c:out value="${halls.hall_address}"></c:out></td>
					<td><c:out value="${halls.hall_price}"></c:out></td>
					<td><c:out value="${halls.hall_capacity}"></c:out></td>
					<td><c:out value="${halls.hall_description}"></c:out></td>
					<td><c:out value="${halls.hall_phone}"></c:out></td>
					
					<c:if test="${hall.user.id==user.id}">
						<td><a href="/halls/edit/${hall.id}">edit</a> <a
							href="/halls/delete/${hall.id}">delete</a></td>
					</c:if>
					<c:if test="${hall.user.id!=user.id}">
						<td><a href="/booking/${hall.id}">booking</a></td>
					</c:if>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
</body>
</html>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>



<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cafe Java</title>

<!-- YOUR own local CSS -->
<title>hello world</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="js/app.js"></script>


<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<body>
	<section class = "d-flex justify-content-around" >

		<div class="p-3 mb-2 bg-warning text-dark w-45 P-5 my-5">
			<h1 style = "color:#9900ff;">Welcome!</h1>
			<p>Join our growing community</p>
			<form:form action="/register" method="post" modelAttribute="newUser">
				<div class="form-group">
					<label>User Name:</label>
					<form:input path="userName" class="form-control" />
					<form:errors path="userName" class="text-dark bg-white" />
				</div>
				<div class="form-group">
					<label>Email:</label>
					<form:input path="email" class="form-control" />
					<form:errors path="email" class="text-dark bg-white"/>
				</div>
				<div class="form-group">
					<label>Password:</label>
					<form:password path="password" class="form-control" />
					<form:errors path="password" class="text-dark bg-white" />
				</div>
				<div class="form-group">
					<label>Confirm Password:</label>
					<form:password path="confirm" class="form-control" />
					<form:errors path="confirm" class="text-dark bg-white" />
				</div>
				<input type="submit" value="Register" class="btn btn-info" />
			</form:form>
		</div>


		<div class="p-3 mb-2 bg-warning text-dark w-30 P-3 my-5" >
			<form:form action="/login" method="post" modelAttribute="newLogin">
				<div class="form-group">
					<label>Email:</label>
					<form:input path="email" class="form-control" />
					<form:errors path="email" class="text-dark bg-white" />
				</div>
				<div class="form-group">
					<label>Password:</label>
					<form:password path="password" class="form-control" />
					<form:errors path="password" class="text-dark bg-white" />
				</div>
				<input type="submit" value="Login" class="btn btn-danger" />
			</form:form>
		</div>
	</section>

</body>
</html>
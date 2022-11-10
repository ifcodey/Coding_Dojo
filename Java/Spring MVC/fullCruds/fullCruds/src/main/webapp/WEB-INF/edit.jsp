<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>expenses</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="main.css" />
</head>
<body>
<div>
<p class="goback"><a href="/" >Go Back</a></p>
</div>
	
	<form:form action="/edit/${expenseToEdit.id }" method="post"
		modelAttribute="expenseToEdit"
		class="form form-group border container">

		<input type="hidden" name="_method" value="put">

		<p>
			<form:label path="Name">Expense name</form:label>
			<form:errors path="Name" />
			<form:input class="form-control" path="Name" />
		</p>
		<p>
			<form:label path="vendor">Vendor</form:label>
			<form:errors path="vendor" />
			<form:input class="form-control" path="vendor" />
		</p>
		<p>
			<form:label path="description">Description</form:label>
			<form:errors path="description" />
			<form:textarea class="form-control" path="description" />
		</p>

		<p>
			<form:label path="amount">amount</form:label>
			<form:errors path="amount" />
			<form:input class="form-control" type="number" path="amount" />
		</p>
		<input type="submit" value="Submit" class="btn btn-success" />
	</form:form>

</body>
</html>
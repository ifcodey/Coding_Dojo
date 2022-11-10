
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="main.css" />
</head>
<body>
<section class=" d-flex p-2 flex-row-reverse"">
	<div class="align-items-end">
		<span class="p-2"><a href="/">Dashboard</a></span> <span
			class="p-2"><a href="/delete/${languageToEdit.id}">Delete</a></span>
	</div>
</section>

	<form:form action="/edit/${languageToEdit.id }" method="post"
		modelAttribute="languageToEdit"
		class="form form-group border container">

		<input type="hidden" name="_method" value="put">

		<p>
			<form:label path="Name">Expense name</form:label>
			<form:errors path="Name" />
			<form:input class="form-control" path="Name" />
		</p>

		<p>
			<form:label path="creator">Vendor</form:label>
			<form:errors path="creator" />
			<form:input class="form-control" path="creator" />
		</p>

		<p>
			<form:label path="version">amount</form:label>
			<form:errors path="version" />
			<form:input class="form-control" type="number" path="version" />
		</p>
		<input type="submit" value="Submit" class="btn btn-success" />
	</form:form>

</body>
</html>
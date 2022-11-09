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

	<div class="container">
		<h1>Full Crud Travel</h1>
		<table class="table table-light">
			<thead>
				<tr>
					<td>Id</td>
					<td>Expense</td>
					<td>Vendor</td>
					<td>amount</td>
					<td>Edit</td>
					<td>Delete</td>
					<!-- <td>Delete link</td> -->
				</tr>
			</thead>
			<tbody>
				<c:forEach var="expense" items="${allexpenses}">
					<tr>
						<td>${expense.id}</td>
						<td><a href = "/show/${expense.id}">${expense.getName()}</a></td>
						<td>${expense.getVendor()}</td>
						<td><span>${expense.getAmount()} $</span></td>
						<td><a href="/edit/${expense.id}">edit</a></td>
						<%-- <td><a href="/delete/${expense.id}">delete</a> --%>
						<td>
							<form action="/delete/${expense.id}" method="post">
								<input type="hidden" name="_method" value="delete"> <input
									type="submit" value="Delete">
							</form>

						</td>
				</c:forEach>
			</tbody>
		</table>
	</div>

	<form:form action="/expenses" method="post" modelAttribute="expenses"
		class="form form-group border container">
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
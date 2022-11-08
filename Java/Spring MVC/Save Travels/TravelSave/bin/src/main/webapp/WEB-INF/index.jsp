<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- New line below to use the JSP Standard Tag Library -->
<!-- Validation -->
<%@ page isErrorPage="true"%>


<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<title>Book Page</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- YOUR own local CSS -->
<link rel="stylesheet" href="main.css" />

<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>


</head>

<body>


	<table>
		<tr>
			<td>Expense</td>
			<td>Vendor</td>
			<td>Amount</td>
		</tr>

		<c:forEach var="book" items="${books}">
			<tr>
				<td>expense :<a href="/books/${book.id}"><c:out
							value="${book.expense}"></c:out></a></td>
				<td>vendor : <c:out value="${book.vendor}"></c:out></td>
				<td>amount :<c:out value="${book.amount }"></c:out></td>
			</tr>
		</c:forEach>
	</table>
	<br>
	<h1>New Expense</h1>
	<br>
	<form:form action="/show" method="post" modelAttribute="bookss">
		<p>
			<form:label path="expenseName">Expense</form:label>
			<form:errors path="expenseName" />
			<form:input path="expenseName" />
		</p>
		<p>
			<form:label path="vendor">Vendor</form:label>
			<form:errors path="vendor" />
			<form:textarea path="vendor" />
		</p>
		<p>
			<form:label path="amount">Pages</form:label>
			<form:errors path="amount" />
			<form:input type="number" path="amount" />
		</p>
		<input type="submit" value="Submit" />
	</form:form>





</body>
</html>

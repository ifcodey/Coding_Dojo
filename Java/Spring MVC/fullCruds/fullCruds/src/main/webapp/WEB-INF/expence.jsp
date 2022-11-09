<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Insert title here</title>
</head>
<body>

	<table>
		<thead>
			<tr>
				<td>Expense Details : </td>
				<td><p class="float-right"><a href="/" >Go Back</a></p></td>
			</tr>
		</thead>


		<tbody>
			<tr>
				<td>Expense Name : </td>
				<td>${expence.name}</td>
			</tr>
				<tr>
				<td>Expense Description :</td>
				<td>${expence.description}</td>
			</tr>
				<tr>
				<td>Vendor :</td>
				<td>${expence.vendor}</td>
			</tr>
				<tr>
				<td>Amount Spent :</td>
				<td><span>${expence.amount} $</span></td>
			</tr>
		</tbody>
	</table>
</body>
</html>
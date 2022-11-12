<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h1 style="margin-top: 10px;">New Cataegory</h1>
		<a href="/"> Home </a>
		<hr>

		<form:form method="post" action="/addcategory"
			modelAttribute="category">
			<table class="table">
				<thead>
					<tr>
						<th scope="col"><form:label path="name">Category Name:</form:label>
							<form:errors path="name" class="error" style="color:red;" /></th>
						<th><form:input path="name" type="text" style="width:500px; " />
						</th>

					</tr>

				</thead>
				<tbody>

					<tr>

					</tr>


				</tbody>

			</table>

			<input type="submit" value="Add Category" class="btn btn-primary"
				class="submit" style="margin-bottom: 30px; margin-left: 30px;" />
	</div>

	</form:form>
</body>
</html>
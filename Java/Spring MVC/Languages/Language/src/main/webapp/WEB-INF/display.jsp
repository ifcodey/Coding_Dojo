<<<<<<< HEAD
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="main.css" />
</head>
<body>
	<section class=" d-flex p-2 flex-row-reverse"">
		<div class="align-items-end">
			<span class="p-2"><a href="/">Dashboard</a></span> <span class="p-2"><a
				href="/delete/${languageToEdit.id}">Delete</a></span>
		</div>
	</section>

	<p>${language.name}</p>
	<p>${language.creator}</p>
	<p>${language.version}</p>
	<td><a href="/edit/${language.id}">edit</a></td>
	<td><a href="/delete/${language.id}">delete</a></td>
=======
<%@ page language="java" contentType="text/html; charset=windows-1256"
    pageEncoding="windows-1256"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<title>Insert title here</title>
</head>
<body>

>>>>>>> 6ddf5258c65248ec5ccd27d85d47b0534512bc87
</body>
</html>
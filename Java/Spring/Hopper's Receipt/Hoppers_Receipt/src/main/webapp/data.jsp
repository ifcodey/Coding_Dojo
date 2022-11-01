<%@ page language="java" contentType="text/html; charset=windows-1256"
    pageEncoding="windows-1256"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="windows-1256">
<link rel="stylesheet" href=""/>
<title>The Receipt</title>
</head>
<body>
<h1>Customer Name :${name}</h1>
<p>Item name :  <c:out value="${itemName}"/></p>
<p>Price :  <c:out value="${price}" /></p>
<p>Description :  <c:out value="${description}"/></p>
<p>Vendor :  <c:out value="${vendor}"/></p>
</body>
</html>
from email.policy import default
from django.db import models
import re
import datetime


# -------------------------------------------
# ------- Validtion Section User Table-------
# -------------------------------------------

class LoginManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['fname']) < 2:
            errors["fname"] = " firstname should be at least 2 characters"
        if len(postData['lname']) < 2:
            errors["lname"] = " lastname should be at least 2 characters"
        # --------------------
        # compare a password
        # --------------------
        if postData['cpassword'] != postData['password']:
            errors["cpassword"] = "The Confirm password not like Password"
        # --------------------
        # Pattern Validation
        # --------------------
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        # --------------------
        # Password Validation
        # --------------------
        if len(postData['password']) < 8:
            errors["password"] = "The Password should be at least 8 characters"
        return errors


class User(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# ------- Validtion Section -> under direct a speacial table -------
    objects = LoginManager()

# -------------------------------------------
# ------- Validtion Section Book Table-------
# -------------------------------------------

class BookManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if postData['title'] == "":
            errors["title"] = "Title is required"
        if len(postData['desc']) < 5:
            errors["desc"] = "Description should be at least 5 characters"
        return errors


class Book(models.Model):
    title = models.TextField(default="This is a show title")
    desc = models.TextField(default="This is a show description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    uploaded_by = models.ForeignKey(User, related_name="useres", on_delete=models.CASCADE)
    users_who_like = models.ManyToManyField(User, related_name="faver")


# ------- Validtion Section -> under direct a speacial table -------
    objects = BookManager()

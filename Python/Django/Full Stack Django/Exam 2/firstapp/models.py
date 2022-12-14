from django.db import models
import re
import datetime
# ---------------------------------
# ------- Validtion Section -------
# ---------------------------------


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


class Users(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # RealsedDate = models.DateField(null=True)

# ------- Validtion Section -------
    objects = LoginManager()



# ==================================
# Validation
# ==================================
class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['title']) < 3:
            errors["title"] = "Name should be at least 3 characters"
        if len(postData['nets']) < 3:
            errors["nets"] = "Network should be at least 3 characters"
        if len(postData['desc']) < 3:
            errors["desc"] = "Description should be at least 3 characters"
        if postData['release_date'] > str(datetime.date.today()):
            errors["release_date"] = "The Released Data should be at past"
        return errors
# ==================================

class Show(models.Model):
    title = models.CharField(max_length=75)
    nets = models.CharField(max_length=4)
    release_date = models.DateField()
    userKey = models.ForeignKey(Users, related_name="useres", on_delete=models.CASCADE)
    desc = models.TextField(default="This is a show description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

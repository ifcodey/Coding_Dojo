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

class ArbortaryManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if postData['species'] == "":
            errors["species"] = "Species is required"
            
        if len(postData['location']) < 2:
            errors["location"] = "Location should be at least 5 characters"

        if postData['date'] > str(datetime.date.today()):
            errors["date"] = "The date should be at past"
        return errors


class Arbortary(models.Model):
    species = models.CharField(max_length=5)
    location = models.CharField(max_length=2)
    reason = models.CharField(max_length=50)
    date = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    planded_by = models.ForeignKey(User, related_name="useres", on_delete=models.CASCADE)



# ------- Validtion Section -> under direct a speacial table -------
    objects = ArbortaryManager()

from django.db import models
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
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        # --------------------
        # Password Validation
        # -------------------- 
        if len(postData['password']) < 8:
            errors["password"] = "The Password should be at least 8 characters"
        if postData['birthday'] > str(datetime.date.today()):
            errors["birthday"] = "The birthday should be at past"
        return errors

class loges(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    brithday = models.DateField(null=True)

# ------- Validtion Section -------
    objects = LoginManager()

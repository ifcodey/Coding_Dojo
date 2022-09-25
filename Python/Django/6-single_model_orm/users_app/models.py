from django.db import models


class User (models.Model):
    firstName = models.CharField(max_length=45)
    LastName = models.CharField(max_length=45)
    emailAddress = models.CharField(max_length=45)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

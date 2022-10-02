from django.db import models


# ==================================
# Validation
# ==================================
class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['title']) < 5:
            errors["title"] = "Blog name should be at least 5 characters"
        if len(postData['release_date']) < 10:
            errors["release_date"] = "Blog description should be at least 10 characters"
        return errors
# ==================================

class Show(models.Model):
    title = models.CharField(max_length=75)
    nets = models.CharField(max_length=4)
    release_date = models.DateField()
    desc = models.TextField(default="This is a show description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

from django.db import models

class Show(models.Model):
    title = models.CharField(max_length=75)
    nets = models.CharField(max_length=4)
    release_date = models.DateField()
    desc = models.TextField(default = "This is a show description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
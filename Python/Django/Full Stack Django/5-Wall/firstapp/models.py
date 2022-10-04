from django.db import models
import re
import datetime
from loginApp.models import loges

class msgs(models.Model):
    msg = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_msg_id = models.ForeignKey(loges, related_name="user_msg", on_delete=models.CASCADE)

class comments(models.Model):
    coment = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_commit_id = models.ForeignKey(loges, related_name="user_commit", on_delete=models.CASCADE)
    msg_commit_id = models.ForeignKey(msgs, related_name="commit", on_delete=models.CASCADE)
    
# ------- Validtion Section -------
    # objects = LoginManager()

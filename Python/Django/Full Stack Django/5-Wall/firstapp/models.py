from django.db import models
import re
import datetime
from loginApp.models import loges

class msgs(models.Model):
    message = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_who_msg = models.ForeignKey(loges, related_name="user_msg", on_delete=models.CASCADE)

class comments(models.Model):
    coment = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_who_commit = models.ForeignKey(loges, related_name="user_commit", on_delete=models.CASCADE)
    commit_on_message = models.ForeignKey(msgs, related_name="commit", on_delete=models.CASCADE)
    
# ------- Validtion Section -------
    # objects = LoginManager()

# user_commit_id
# msg_commit_id
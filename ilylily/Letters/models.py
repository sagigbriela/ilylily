from django.db import models
from datetime import date
import uuid

# Create your models here.

class Letter(models.Model):
    headline = models.CharField(max_length=200)
    body_text = models.TextField()
    by = models.CharField(max_length=100, default="Maria Gabriela")
    made_date = models.DateField(default=date.today)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    
    def __str__(self):
        return self.headline
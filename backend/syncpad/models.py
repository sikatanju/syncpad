from django.db import models

# Create your models here.
class Notes(models.Model):
    title = models.CharField(max_length=255, default='Untitled')
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    user = models.OneToOneField()

    def __str__(self):
        return f'{self.title}'
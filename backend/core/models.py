from django.db import models

# Create your models here.

class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Staff(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='staff')
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='staff_photos/')

    def __str__(self):
        return self.name

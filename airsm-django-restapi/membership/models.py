from django.db import models

# Create your models here.

class Member(models.Model):
    phone = models.CharField(max_length=11)
    points = models.IntegerField()

class Discharge(models.Model):
    discharge_date = models.DateField()
    material = models.CharField(max_length=10)
    machine_id = models.IntegerField()
    who = models.ForeignKey(Member)
    
class Rank(models.Model):
    who = models.ForeignKey(Member, on_delete=models.CASCADE)
    




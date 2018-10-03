from django.db import models
from autos.models import *

# Create your models here.
class Lavado(models.Model):
    Auto = models.ForeignKey(Auto, on_delete=models.CASCADE)
    Jabon = models.FloatField(max_length=50)
    Agua = models.FloatField(max_length=50)
    Tiempo = models.IntegerField(max_length=50)

    class Meta:
        verbose_name_plural = "Lavados"

    def __str__(self):
        return str(self.Auto)

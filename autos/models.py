from django.db import models

# Create your models here.
class Tipo_Auto(models.Model):
    Tipo_Auto = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Tipo Autos"

    def __str__(self):
        return str(self.Tipo_Auto)

class Auto(models.Model):
    Tipo_auto = models.ForeignKey(Tipo_Auto, on_delete=models.CASCADE)
    Referencia = models.CharField(max_length=50)
    Matricula = models.CharField(max_length=50,unique=True)

    class Meta:
        verbose_name_plural = "Autos"

    def __str__(self):
        return str(self.Matricula)

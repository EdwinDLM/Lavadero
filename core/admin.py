from django.contrib import admin
from .models import *
from autos.models import *
# Register your models here.

class Lavados (admin.ModelAdmin):
    list_display = ['id','Auto','Jabon','Agua','Tiempo']
    class Meta:
        model = Lavado

admin.site.register(Lavado, Lavados)

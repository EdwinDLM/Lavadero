from django.contrib import admin
from .models import *

# Register your models here.
class TipoAutos (admin.ModelAdmin):
    list_display = ['id','Tipo_Auto']
    class Meta:
        model = Tipo_Auto


class Autos (admin.ModelAdmin):
    list_display = ['id','Tipo_auto','Referencia','Matricula']
    class Meta:
        model = Auto

admin.site.register(Tipo_Auto, TipoAutos)
admin.site.register(Auto, Autos)

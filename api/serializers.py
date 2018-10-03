# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import serializers
from django.contrib.auth.models import User
from core.models import *
from autos.models import *


class LavadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lavado
        fields = "__all__"

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import *
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.decorators import action, detail_route
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.request import Request
from core.models import *
from autos.models import *
# Create your views here.

@action(methods=['post'], detail=True)
class LavadosList(generics.ListCreateAPIView):
    queryset = Lavado.objects.all()
    serializer_class = LavadoSerializer

class LavadosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lavado.objects.all()
    serializer_class = LavadoSerializer

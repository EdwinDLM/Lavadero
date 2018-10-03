from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from api.views import *

urlpatterns = [
     url(r'^api/Lavado/$', LavadosList.as_view()),
     url(r'^api/Lavado/(?P<pk>\d+)/$', LavadosDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

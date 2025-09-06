from django.shortcuts import render
from rest_framework import generics
from .models import WorkshopRegistration
from .serializers import WorkshopRegistrationSerializer

# Supports GET (list all) and POST (create new)
class WorkshopRegistrationListCreateView(generics.ListCreateAPIView):
    queryset = WorkshopRegistration.objects.all().order_by("-submitted_at")
    serializer_class = WorkshopRegistrationSerializer

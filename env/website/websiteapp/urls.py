from django.urls import path
from .views import WorkshopRegistrationListCreateView

urlpatterns = [
    path("register/", WorkshopRegistrationListCreateView.as_view(), name="workshop-register"),
]

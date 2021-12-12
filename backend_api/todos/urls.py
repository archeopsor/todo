from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.ListItem.as_view()),
    path('items/<int:pk>/', views.DetailItem.as_view()),
    path('projects/', views.ListProject.as_view()),
    path('projects/<int:pk>/', views.DetailProject.as_view())
]
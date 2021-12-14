from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Item, Project
from .serializers import ItemSerializer, ProjectSerializer


class ListItem(generics.ListCreateAPIView, LoginRequiredMixin):
    queryset=Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        items = Item.objects.filter(author=request.user)
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


class DetailItem(generics.RetrieveUpdateDestroyAPIView, LoginRequiredMixin):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        items = Item.objects.filter(author=request.user, id=pk)
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


class ListProject(generics.ListCreateAPIView, LoginRequiredMixin):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        projects = Project.objects.filter(author=request.user)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class DetailProject(generics.RetrieveUpdateDestroyAPIView, LoginRequiredMixin):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        projects = Project.objects.filter(author=request.user, id=pk)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
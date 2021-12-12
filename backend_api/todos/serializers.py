from rest_framework import serializers
from .models import Item, Project


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id', 
            'name', 
            'description', 
            'due_date', 
            'priority', 
            'progress', 
            'completed',
        )
        model = Item


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id', 
            'name', 
            'description', 
            'due_date', 
            'priority', 
            'progress', 
            'completed',
        )
        model = Project
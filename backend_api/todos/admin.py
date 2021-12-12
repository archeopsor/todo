from django.contrib import admin

# Register your models here.
from .models import Item, Project



class Admin(admin.ModelAdmin):
    list_display = ('name', 'description', 'due_date', 'priority', 'progress', 'completed',)

    admin.site.register(Item)
    admin.site.register(Project)
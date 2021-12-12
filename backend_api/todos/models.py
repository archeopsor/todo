from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    priority = models.FloatField(default=0.1)
    due_date = models.DateTimeField()
    progress = models.FloatField(auto_created=True, default=0.0)
    author = models.ManyToManyField('auth.User', through = 'ItemUser', unique=False)
    completed = models.BooleanField(auto_created=True, default=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name', 'description', 'due_date', 'priority', 'progress', 'completed',)


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    priority = models.FloatField(default=0.1)
    progress = models.FloatField(auto_created=True, default=0)
    items = models.ManyToManyField(Item)
    due_date = models.DateTimeField(blank=True)
    author = models.ManyToManyField("auth.User", unique=False)
    completed = models.BooleanField(auto_created=True, default=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name', 'description', 'due_date', 'priority', 'progress', 'completed',)


class ItemUser(models.Model):
    """Intermediary binding to contain all items for a given user."""
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    item = models.ForeignKey('Item', on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)
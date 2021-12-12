# Generated by Django 4.0 on 2021-12-12 02:41

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('completed', models.BooleanField(auto_created=True, default=False)),
                ('progress', models.FloatField(auto_created=True, default=0.0)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('priority', models.FloatField(default=0.1)),
                ('due_date', models.DateTimeField()),
                ('author', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('name', 'description', 'due_date', 'priority', 'progress', 'completed'),
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('completed', models.BooleanField(auto_created=True, default=False)),
                ('progress', models.FloatField(auto_created=True, default=0)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('priority', models.FloatField(default=0.1)),
                ('due_date', models.DateTimeField(blank=True)),
                ('author', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('items', models.ManyToManyField(to='todos.Item')),
            ],
            options={
                'ordering': ('name', 'description', 'due_date', 'priority', 'progress', 'completed'),
            },
        ),
    ]
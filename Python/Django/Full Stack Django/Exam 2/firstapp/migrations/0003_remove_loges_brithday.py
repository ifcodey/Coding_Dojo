# Generated by Django 4.1.1 on 2022-10-23 08:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0002_loges'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='loges',
            name='brithday',
        ),
    ]

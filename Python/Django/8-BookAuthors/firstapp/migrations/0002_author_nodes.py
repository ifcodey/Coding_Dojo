# Generated by Django 2.2.4 on 2022-09-28 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='nodes',
            field=models.TextField(null=True),
        ),
    ]

# Generated by Django 4.1.1 on 2022-10-23 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0005_users_delete_loges'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='RealsedDate',
            field=models.DateField(null=True),
        ),
    ]
# Generated by Django 4.1.1 on 2022-10-23 10:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0007_remove_users_realseddate'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='userKey',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='useres', to='firstapp.users'),
            preserve_default=False,
        ),
    ]

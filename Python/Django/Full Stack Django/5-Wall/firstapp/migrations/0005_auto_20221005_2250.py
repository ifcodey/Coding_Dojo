# Generated by Django 2.2.4 on 2022-10-05 19:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0004_auto_20221005_2249'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comments',
            old_name='commit_in_message',
            new_name='commit_on_message',
        ),
    ]
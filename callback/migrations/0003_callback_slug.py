# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('callback', '0002_callback_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='callback',
            name='slug',
            field=models.SlugField(max_length=45, null=True, blank=True),
        ),
    ]

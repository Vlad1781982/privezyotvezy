# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('callback', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='callback',
            name='date',
            field=models.DateField(auto_now_add=True, verbose_name=b'\xd0\x94\xd0\xb0\xd1\x82\xd0\xb0 \xd0\xbd\xd0\xb0\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd1\x8f', null=True),
        ),
    ]

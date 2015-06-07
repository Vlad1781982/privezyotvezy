# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cargroups',
            name='visible',
            field=models.BooleanField(default=True, verbose_name=b'\xd0\x92\xd0\xb8\xd0\xb4\xd0\xb8\xd0\xbc\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c'),
        ),
        migrations.AddField(
            model_name='cars',
            name='visible',
            field=models.BooleanField(default=True, verbose_name=b'\xd0\x92\xd0\xb8\xd0\xb4\xd0\xb8\xd0\xbc\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c'),
        ),
    ]

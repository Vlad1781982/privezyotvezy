# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0002_auto_20150605_1308'),
    ]

    operations = [
        migrations.AddField(
            model_name='cars',
            name='description',
            field=models.TextField(max_length=2000, null=True, verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5', blank=True),
        ),
        migrations.AddField(
            model_name='cars',
            name='photochar',
            field=imagekit.models.fields.ProcessedImageField(upload_to=b'media/', null=True, verbose_name=b'\xd0\x93\xd0\xb0\xd0\xb1\xd0\xb0\xd1\x80\xd0\xb8\xd1\x82\xd1\x8b', blank=True),
        ),
        migrations.AddField(
            model_name='cars',
            name='photodetail',
            field=imagekit.models.fields.ProcessedImageField(upload_to=b'media/', null=True, verbose_name=b'\xd0\xa4\xd0\xbe\xd1\x82\xd0\xbe', blank=True),
        ),
        migrations.AddField(
            model_name='cars',
            name='slug',
            field=models.SlugField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='cars',
            name='photo',
            field=imagekit.models.fields.ProcessedImageField(upload_to=b'media/', verbose_name=b'\xd0\xa4\xd0\xbe\xd1\x82\xd0\xbe\xd0\xbc\xd0\xb8\xd0\xbd\xd0\xb8\xd0\xb0\xd1\x82\xd1\x8e\xd1\x80\xd0\xb0'),
        ),
    ]

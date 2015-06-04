# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CarGroups',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, verbose_name=b'\xd0\x93\xd1\x80\xd1\x83\xd0\xb7\xd0\xbe\xd0\xbf\xd0\xbe\xd0\xb4\xd1\x8a\xd0\xb5\xd0\xbc\xd0\xbd\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c')),
                ('price', models.IntegerField(verbose_name=b'\xd0\xa1\xd1\x82\xd0\xbe\xd0\xb8\xd0\xbc\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c \xd0\xbe\xd1\x82...')),
                ('minorder', models.CharField(max_length=200, verbose_name=b'\xd0\x9c\xd0\xb8\xd0\xbd\xd0\xb8\xd0\xbc\xd0\xb0\xd0\xbb\xd1\x8c\xd0\xbd\xd1\x8b\xd0\xb9 \xd0\xb7\xd0\xb0\xd0\xba\xd0\xb0\xd0\xb7')),
                ('addtime', models.CharField(max_length=200, verbose_name=b'\xd0\x94\xd0\xbe\xd0\xbf\xd0\xbe\xd0\xbb\xd0\xbd\xd0\xb8\xd1\x82\xd0\xb5\xd0\xbb\xd1\x8c\xd0\xbd\xd0\xbe\xd0\xb5 \xd0\xb2\xd1\x80\xd0\xb5\xd0\xbc\xd1\x8f')),
                ('mkad', models.IntegerField(verbose_name=b'\xd0\x92\xd1\x8b\xd0\xb5\xd0\xb7\xd0\xb4 \xd0\xb7\xd0\xb0 \xd0\xbc\xd0\xba\xd0\xb0\xd0\xb4')),
                ('photo', imagekit.models.fields.ProcessedImageField(upload_to=b'media/', verbose_name=b'\xd0\xa4\xd0\xbe\xd1\x82\xd0\xbe')),
            ],
            options={
                'verbose_name': '\u041f\u043e \u0433\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u0438',
                'verbose_name_plural': '\u041f\u043e \u0433\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u0438',
            },
        ),
        migrations.CreateModel(
            name='Cars',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, verbose_name=b'\xd0\x9c\xd0\xbe\xd0\xb4\xd0\xb5\xd0\xbb\xd1\x8c')),
                ('price', models.IntegerField(verbose_name=b'\xd0\xa1\xd1\x82\xd0\xbe\xd0\xb8\xd0\xbc\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c \xd0\xbe\xd1\x82...')),
                ('carrying', models.IntegerField(verbose_name=b'\xd0\x93\xd1\x80\xd1\x83\xd0\xb7\xd0\xbe\xd0\xbf\xd0\xbe\xd0\xb4\xd1\x8a\xd0\xb5\xd0\xbc\xd0\xbd\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c')),
                ('minorder', models.CharField(max_length=200, verbose_name=b'\xd0\x9c\xd0\xb8\xd0\xbd\xd0\xb8\xd0\xbc\xd0\xb0\xd0\xbb\xd1\x8c\xd0\xbd\xd1\x8b\xd0\xb9 \xd0\xb7\xd0\xb0\xd0\xba\xd0\xb0\xd0\xb7')),
                ('addtime', models.CharField(max_length=200, verbose_name=b'\xd0\x94\xd0\xbe\xd0\xbf\xd0\xbe\xd0\xbb\xd0\xbd\xd0\xb8\xd1\x82\xd0\xb5\xd0\xbb\xd1\x8c\xd0\xbd\xd0\xbe\xd0\xb5 \xd0\xb2\xd1\x80\xd0\xb5\xd0\xbc\xd1\x8f')),
                ('mkad', models.IntegerField(verbose_name=b'\xd0\x92\xd1\x8b\xd0\xb5\xd0\xb7\xd0\xb4 \xd0\xb7\xd0\xb0 \xd0\xbc\xd0\xba\xd0\xb0\xd0\xb4')),
                ('photo', imagekit.models.fields.ProcessedImageField(upload_to=b'media/', verbose_name=b'\xd0\xa4\xd0\xbe\xd1\x82\xd0\xbe')),
            ],
            options={
                'verbose_name': '\u0411\u043e\u0440\u0442',
                'verbose_name_plural': '\u0411\u043e\u0440\u0442\u0430',
            },
        ),
    ]

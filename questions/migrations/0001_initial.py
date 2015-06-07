# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=500, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xb2\xd0\xbe\xd0\xbf\xd1\x80\xd0\xbe\xd1\x81\xd0\xb0')),
                ('content', models.TextField(verbose_name=b'\xd0\x92\xd0\xbe\xd0\xbf\xd1\x80\xd0\xbe\xd1\x81')),
                ('answer', models.TextField(verbose_name=b'\xd0\x9e\xd1\x82\xd0\xb2\xd0\xb5\xd1\x82')),
            ],
            options={
                'verbose_name': '\u0412\u043e\u043f\u0440\u043e\u0441/\u041e\u0442\u0432\u0435\u0442',
                'verbose_name_plural': '\u0412\u043e\u043f\u0440\u043e\u0441\u044b/\u041e\u0442\u0432\u0435\u0442\u044b',
            },
        ),
    ]

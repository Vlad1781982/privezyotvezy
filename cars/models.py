# -*- coding: utf-8 -*-
from django.db import models
from ckeditor.fields import RichTextField
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

# Create your models here.
class Cars(models.Model):
    title=models.CharField('Модель', max_length=200)
    carrying=models.IntegerField('Грузоподъемность')
    minorder=models.CharField('Минимальный заказ', max_length=200)
    addtime=models.CharField('Дополнительное время', max_length=200)
    mkad=models.IntegerField('Выезд за мкад')
    photo=ProcessedImageField(verbose_name='Фото',upload_to='media/',
                                           processors=[ResizeToFill(120, 70)],
                                           format='JPEG',
                                           options={'quality': 80})


    class Meta:
        verbose_name = ('Борт')
        verbose_name_plural = ('Борта')

    def __unicode__(self):
        return u'%s' % self.title
    
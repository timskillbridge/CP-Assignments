# Generated by Django 5.1.7 on 2025-03-26 19:11

import django.core.validators
import hello_django_app.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, validators=[hello_django_app.validators.validate_p_name])),
                ('level', models.PositiveBigIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)])),
                ('captured', models.BooleanField(default=False)),
            ],
        ),
    ]

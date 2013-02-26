from django.db import models
from django.contrib import admin


class Girl(models.Model):
    title = models.CharField(max_length=200)
    txt = models.FileField(upload_to="ascii/")
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __unicode__(self):
        return self.title


class Fact(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __unicode__(self):
        return self.title


###############
#    ADMIN    #
###############


class GirlAdmin(admin.ModelAdmin):
    list_display = ['title']


class FactAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(Girl, GirlAdmin)
admin.site.register(Fact, FactAdmin)

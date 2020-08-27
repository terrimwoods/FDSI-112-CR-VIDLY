from django.contrib import admin
from .models import Genre, Movie, Contact

# Register your models here.
class GenreTemplate(admin.ModelAdmin):
    list_display = ("id", "name")
    list_display_links = ("id", "name")

class MovieTemplate(admin.ModelAdmin):
    list_display = ("id", "title", "release_year", "price")
    list_display_links = ("id", "title")
    fields = ("genre", "release_year", "date_created", "title", "price", "director", "image_url", "description")
    #exclude = ("price")
# id, title, release_year, price
admin.site.register(Genre, GenreTemplate)
admin.site.register(Movie, MovieTemplate)
admin.site.register(Contact)
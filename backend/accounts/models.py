from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# 1. Modelo de Usuario Personalizado
class CustomUser(AbstractUser):
    # AbstractUser ya incluye campos como username, email, password, first_name, last_name.
    # Aquí puedes agregar campos extra que tengan que ver estrictamente con la cuenta.
    is_creator = models.BooleanField(default=False)
    
    def __str__(self):
        return self.username

# 2. Modelo de Perfil
class Profile(models.Model):
    # Relación 1 a 1: Un usuario tiene un solo perfil, y un perfil pertenece a un solo usuario.
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    
    # Campos adicionales para el perfil público o detalles del usuario
    bio = models.TextField(max_length=500, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, blank=True)
    # avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return f'Perfil de {self.user.username}'
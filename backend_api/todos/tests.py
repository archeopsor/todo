from django.test import TestCase
from .models import Item

# Create your tests here.
class ItemModelTest(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        return super().setUpTestData()
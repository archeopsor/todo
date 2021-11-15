import pymongo
import time
import os

MONGO_URL = os.getenv(MONGO_URL)

class Session:
    def __init__(self):
        self.client = pymongo.MongoClient(MONGO_URL)
        self.db = self.client['todo']
        self.time_loaded = time.time()

        self.structures = {

        }

    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_value, exc_traceback):
        self.close()

    def refresh(self):
        self.close()

        self.client = pymongo.MongoClient(MONGO_URL)
        self.db = self.client['todo']


    def ensure_recent(self, minutes=5):
        if (time.time() - self.time_loaded) > (60*minutes):
            self.refresh()

        return self.db

    def close(self):
        return self.client.close()
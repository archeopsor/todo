from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv('.env')


def get_db_handle(db_name, host, port, username, password):
    client = MongoClient(os.getenv("MONGO_URL"))

    db_handle = client['todo']
    return db_handle, client
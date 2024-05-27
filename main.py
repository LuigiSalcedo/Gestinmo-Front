from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI

app = FastAPI()

app.mount("/", StaticFiles(directory="dist"))
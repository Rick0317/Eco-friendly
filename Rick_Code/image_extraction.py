import requests
from bs4 import BeautifulSoup
import json
import sys

url = sys.stdin.readline()

html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
print(soup.find_all("a"))
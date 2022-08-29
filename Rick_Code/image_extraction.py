import requests
from bs4 import BeautifulSoup


url = 'https://www.bbc.com/'

html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")
print(soup.find_all("a"))
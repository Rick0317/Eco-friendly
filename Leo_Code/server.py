import requests

url = 'https://www.bbc.com/'

response = requests.get(url, stream = True)
print(response.headers['Content-length'])
# print(file_size = int(response.getheader('Content-Length')))

# For more info on why this works part of the time:
# https://github.com/psf/requests/issues/4925
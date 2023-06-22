import requests
from fake_useragent import UserAgent

url = 'https://news.yahoo.co.jp/'

# response = requests.get(url)

# print(response.status_code)

# for key,value in response.headers.items():
#     print(key,'  ',value)

# print(response.encoding)

# print(response.content[:500])

# print(response.cookies)

# ua = UserAgent()
# header = {'user-agent':ua.chrome}
# response = requests.get('https://news.yahoo.co.jp/',headers=header)

# response = requests.get('https://news.yahoo.co.jp',timeout=3)

param = {'q': 'python'}
response = requests.get('https://www.google.co.jp/search',params=param)
print(response.text)
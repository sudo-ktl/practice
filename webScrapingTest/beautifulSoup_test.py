import requests
import re
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

ua = UserAgent()
header = {'user-agent': ua.chrome}

# url = 'https://www.yomiuri.co.jp/'

# res = requests.get(url,headers=header)

# soup = BeautifulSoup(res.text, "html.parser")

# elems = soup.select('body > div.home-2021-primary > div.home-2021-primary__main > div.headline > article:nth-child(1) > div > h3 > a')

# print(elems[0].contents[0])
# print(elems[0].attrs['href'])

url = 'https://www.yahoo.co.jp/'

res = requests.get(url,headers=header)

soup = BeautifulSoup(res.text, 'html.parser')

elems = soup.find_all(href=re.compile('news.yahoo.co.jp/pickup'))

# print(elems[0].find('h1').find('span').contents[0])

for elem in elems:
    print(elem.find('h1').find('span').contents[0])
    print(elem.attrs['href'])

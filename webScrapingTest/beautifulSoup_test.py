import requests
import re
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

ua = UserAgent()
header = {'user-agent': ua.chrome}

url = 'https://www.yahoo.co.jp/'

res = requests.get(url,headers=header)

soup = BeautifulSoup(res.text, 'html.parser')

elems = soup.find_all(href=re.compile('news.yahoo.co.jp/pickup'))

print(elems)

for elem in elems:
    print(elem.find('span').contents[0])
    print(elem.attrs['href'])

# pickup_links = [elem.attrs['href'] for elem in elems]
# print(pickup_links)

# for pickup_link in pickup_links:
#     pickup_res = requests.get(pickup_link,headers=header)
#     pickup_soup = BeautifulSoup(pickup_res.text, 'html.parser')
#     pickup_elem  = pickup_soup.find('p', class_= 'sc-JnCVy hiAeLc')
#     news_link = pickup_elem.contents[0].attrs['href']
#     news_res = requests.get(news_link)
#     news_soup = BeautifulSoup(news_res.text, 'html.parser')
#     print(news_soup.find('title').contents[0])
#     print(news_link)
#     detail_text = news_soup.find(class_=re.compile('highLightSearchTarget'))
#     print(detail_text.text if hasattr(detail_text,"text") else '', end='\n\n\n\n')
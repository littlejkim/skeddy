import requests
from bs4 import BeautifulSoup
from datetime import datetime


currentTime = datetime.now()

presentprice = None
compared = None
comparedpercent = None

def financeinfo(str):
    code = str
    url = "https://finance.naver.com/item/main.nhn?code={}".format(code)
    result = requests.get(url)
    bs_obj = BeautifulSoup(result.content, "html.parser")

   
    no_today = bs_obj.find("p", {"class": "no_today"}) 
    blind = no_today.find("span", {"class": "blind"}) 


    no_exday = bs_obj.find("p", {"class": "no_exday"})
    comp = no_exday.find_all("span", {"class": "blind"})
    presentprice = blind.text
    compared = comp[0].text
    comparedpercent = comp[1].text

    print(presentprice)
    print(compared)
    print(comparedpercent)
    
    finalTime = datetime.now()

    print(finalTime - currentTime)
    return

financeinfo("036570") 
    




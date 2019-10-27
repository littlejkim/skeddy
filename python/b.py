#-*- coding:utf-8 -*-

import sys
import pandas as pd
import datetime as dt
import html5lib

company_code = sys.argv[1]

def pastinfo(code, page):
    
    url = ('https://finance.naver.com/item/sise_day.nhn?code='+code+'&page='+str(page))
    data = pd.read_html(url)
    data = data[0]
    data.columns = ['날짜','당일종가','전일종가','시가', '고가', '저가', '거래량']
    price_data = data.dropna(axis=0, how='any')
    price_data = price_data.drop(price_data.index[0])
    price_data = price_data.reset_index(drop=True)
    price_data['날짜'] = pd.to_datetime(price_data['날짜'], format='%Y/%m/%d')
    return price_data
    
pd = pastinfo(company_code, 1)

print(pd)


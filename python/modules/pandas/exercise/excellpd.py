import pandas as pd
df = pd.read_excel("D:\karka\karka_training\python\modules\pandas\exercise\Excel\Book1.xlsx")

# set rows and columns to be visiable

pd.set_option('display.max_columns',20)
# print(df)

print(df.loc[0])

json = df.to_json(orient='records',date_format='iso',default_handler=str)
with open("exjson.json","w") as json_file:
    json_file.write(json)

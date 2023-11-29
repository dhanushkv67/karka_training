import pandas as pd
data = {
    "Duration":[60,60,35,45,50],
    "Date":['2020/12/01',
            '2020/12/02',
            '2020/12/03',
            '2020/12/04',
            '2020/12/05'
            ],
    "Pulse":[110,117,None,109,117],
    "Maxpulse":[None,145,135,175,148]
}
df = pd.DataFrame(data)
print(df)

# removing

# dropna will remove empty cells,and return modified data
nw_df = df.dropna()
print(nw_df)
# if the change  need to be made in original data,pass inplace = true as argument
# df.dropna(inplace=True)
# print(df)

# replacing empty cells with values

df.fillna(130,inplace=True)
print(df)

# replacing in particular cells

df["Pulse"].fillna(130,inplace=True)
print(df)

# mean method
# it is nothing but average
 
meanvalue = df['Pulse'].mean()
print(meanvalue)

# median 
# which will give middle value for ascending order

medianvalue = df['Pulse'].median()
print(medianvalue)

# Mode
# most repeated value

modevalue = df['Pulse'].mode()[0]
print(modevalue)

# Replacing wrong value for particular index

df.loc[3,"Duration"] = 20
print(df)

# deleting worng cells with conditions

for x in df.index:
    if df.loc[x,"Duration"] > 60:
        df.drop(x,inplace=True)

# finding duplicate rows 

print(df.duplicated())

# removing duplicate rows

df.drop_duplicates(inplace=True)

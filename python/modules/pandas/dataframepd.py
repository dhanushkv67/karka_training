import pandas as pd
# DATAFRAME
# it is two dimensional data structure, like row and column
data = {
    "calories":[420,380,390],
    "duration":[50,40,45]
}
df = pd.DataFrame(data)
print(df)
# loc used to locate rows
print(df.loc[0])
# use of list of indexes
print(df.loc[[0,1]])

# index argument
df = pd.DataFrame(data,index=["day1","day2","day3"])
print(df)

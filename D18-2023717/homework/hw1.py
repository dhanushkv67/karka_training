my_resume=[
    {'name':'k.v.dhanush',
    'e_mail':'dhanushkv671999@gmail.com',
    'mobile_no':9597250318,
    'soft_skills':'teamwork',
    'hard_skills':'typing speed',
    'educational_qualification':[
        {'course':'sslc','institute':'s.m.r.v. high. sec. school','percentage':81.4,'passed_out':2014},
        {'course':'hsc','institute':'s.n.m. hindu vidayala high. sec. school','percentage':75.2,'passed_out':2016},
        {'course':'b.com','institute':'scott christian college','percentage':61,'passed_out_year':2019}],
    'experience':[
        {'company_name':'n.s.h','position':'safety officer','years':2,'location':'abu dhabi'},
        {'company_name':'oxick technology','position':'tele marketing','years':0.6,'location':'nagercoil'},
        {'company_name':'cube','position':'admin officer','years':0.6,'location':'vadasery'}],
    'hobbies':['cricket','football'],
    'personal_details':{'father_name':'t.k.kannan','father_occupation':None,'language_known':['tamil','english','hindi'],
    'DOB':{'date':6,'month':7,'year':1999},'gender':'male','martial_status':'single',
    'address':{'door_no':'5/68','street':'vaniger street','village':'peruvilai','town':'nagercoil','pin_code':629003}}}]
for i in my_resume[0]:
    if type(my_resume[0][i])==str:
        print((i),'\t:',my_resume[0][i],'\n')
    else:
        if type(my_resume[0][i])==list:
            print(i,':')
            for info in my_resume[0][i]:
                if type(info)==dict:
                    # print(info)
                    for sep in info:
                        print(sep,'\t:',info[sep],'\n')
                else:
                    print('\t#)',info)  
        else:
            if type(my_resume[0][i])==dict:
                for info in my_resume[0][i]:
                    if type(my_resume[0][i][info])==list:
                        print(info,':')
                        for no in my_resume[0][i][info]:
                            print('\t#)',no)
                    else:
                        if type(my_resume[0][i][info])==dict:
                            for a in my_resume[0][i][info]:
                                print(a,'\t:',my_resume[0][i][info][a])
                        else:
                            print(info,'\t:',my_resume[0][i][info])
                
                

                    

                        
            
                
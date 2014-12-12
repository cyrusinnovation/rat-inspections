
# Export from IPy Notebook file

# In[1]:

import pandas as pd
import numpy as np
import geojson as gj


# In[2]:

activity_cutoff = 5


# In[3]:

inspections = pd.read_csv('../data/RIP_FOIL_11_4_2014_update.csv')


# In[4]:

inspections['INSP_DATE'] = pd.to_datetime(inspections['INSP_DATE'])


# In[5]:

inspections['APPROVED_DATE'] = pd.to_datetime(inspections['APPROVED_DATE'])


# In[6]:

inspections['BOROUGH'] = inspections['BOROUGH'].astype("category")


# In[7]:

inspections['BOROUGH'] = inspections['BOROUGH'].cat.set_categories(['Manhattan','Brooklyn','Queens','Bronx','Staten Island'])


# In[8]:

inspections.groupby('BOROUGH').size()


# In[9]:

def selectAndAnnotateActiveFeatures(geojson, bbls_dict):
    """Searches the geojson object for the given BBLs in the dict and when it finds them, add the ActiveCount property and put it into a list for return """
    active_features = []
    for feature in geojson.features:
        bbl = int(feature.properties['BBL'])
        if bbl in bbls_dict:
            feature.properties['ActiveCount'] = bbls_dict[bbl]
            active_features.append(feature)
    return active_features


# In[10]:

active_inspections = inspections[inspections['RESULT'].isin(['Active Rat Signs']) & inspections['BLOCK'].notnull()]


# In[11]:

active_bbls = active_inspections.BBL.value_counts()


# In[12]:

most_active_bbls = active_bbls[active_bbls >= activity_cutoff]


# In[13]:

most_active_inspections = active_inspections[inspections['BBL'].isin(most_active_bbls.index)].sort(columns=['BBL','INSP_DATE'])


# In[14]:

def time_range (x):
    return x.max() - x.min()


# In[15]:

variance_by_bbl = most_active_inspections.groupby('BBL')['INSP_DATE'].apply(time_range)


# In[16]:

long_term_active_bbls = variance_by_bbl[variance_by_bbl > np.timedelta64(1, 'Y')]


# In[17]:

long_term_active_inspections = inspections[inspections['BBL'].isin(long_term_active_bbls.index)].sort(columns=['BBL','INSP_DATE'])


# In[18]:

bbl_active_inspection_count = long_term_active_inspections[long_term_active_inspections['RESULT'].isin(['Active Rat Signs']) & long_term_active_inspections['BLOCK'].notnull()].BBL.value_counts()


# In[19]:

variance_by_bbl[variance_by_bbl.index==4034910067]


# In[20]:

long_term_active_inspections[long_term_active_inspections['BBL'] == 4034910067 ]


# In[31]:

long_term_active_inspections.to_csv('../data/inspections_for_most_active.csv',columns=['BBL','INSP_DATE','RESULT'],index=False,date_format="%Y-%m-%d")


# In[22]:

most_active = inspections[inspections['BBL'].isin(most_active_bbls.index)].sort(columns=['BBL','INSP_DATE'])


# In[23]:

active_features = []


# In[24]:

geojson_files = ['../map_data/manhattan.geojson','../map_data/bronx.geojson','../map_data/brooklyn.geojson','../map_data/queens.geojson','../map_data/staten_island.geojson']


# In[25]:

for file_name in geojson_files:
    file_handle = open(file_name,'r')
    geojson = gj.load(file_handle)
    curr_active_features = selectAndAnnotateActiveFeatures(geojson, bbl_active_inspection_count)
    print file_name + ": " + str(len(curr_active_features))
    active_features += curr_active_features
    del geojson
    file_handle.close()


# In[26]:

len(active_features)


# In[27]:

active = gj.FeatureCollection(active_features)


# In[28]:

active_file = open('../data/most_active.geojson','w')


# In[29]:

gj.dump(active, active_file)


# In[30]:

active_file.close()


# In[30]:




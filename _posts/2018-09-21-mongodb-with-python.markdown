---
layout: post
title:  "MongoDB with Python"
categories: [code, notes]
---

See [MongoDB notes]({% post_url 2018-09-21-mongodb %}).

See the [API documentation](http://api.mongodb.com/python/current/api/index.html), [Installation information](http://api.mongodb.com/python/current/installation.html), [Tutorial](http://api.mongodb.com/python/current/tutorial.html).

Create and activate Python environment using `virtualenv`:

```
cd python
virtualenv env
source env/bin/activate
```

Running `source env/bin/activate` should modify the shell prompt to indicate the active environment. Continue the following in the activated environment.

```
pip install mongo jupyter
pip freeze > requirements.txt
```

> The `python/env` folder should not be committed to a VCS e.g. Git. The `requirements.txt` file is useful for recreating the `virtualenv` environment, using `pip install -r requirements.txt`.

Start up Jupyer Notebook:

```
jupyter notebook
```

Jupyter Notebook should launch in a browser session. Use it to create Python notebook and play with MongoDB.


Import `pymongo` and start client:


```python
import pymongo
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
print(client)
```

    MongoClient(host=['localhost:27017'], document_class=dict, tz_aware=False, connect=True)


List databases:


```python
databases = client.list_database_names()
print(databases) # [u'admin', u'config', u'local', u'test']
```

    [u'admin', u'config', u'local']


Get a reference to a database:


```python
db = client.test # Or e.g. client['test-something'] if necessary
print(db) #Database(MongoClient(host=['localhost:27017'], document_class=dict, tz_aware=False, connect=True), u'test')
```

    Database(MongoClient(host=['localhost:27017'], document_class=dict, tz_aware=False, connect=True), u'test')


Delete `plants` collection so that this notebook is repeatable:


```python
db.drop_collection('plants')
```




    {u'code': 26,
     u'codeName': u'NamespaceNotFound',
     u'errmsg': u'ns not found',
     u'ok': 0.0}



Get a reference to a `Collection`, and add a `Document`:


```python
plants = db.plants
print(plants) # Collection(Database(MongoClient(host=['localhost:27017'], document_class=dict, tz_aware=False, connect=True), u'test'), u'plants')
new_plant = {
    'type': 'chilli',
    'variety': 'Aji Limo',
    'rating': 9
}
print(db.list_collection_names()) # [] - collection doesn't actually exist yet
new_id = plants.insert_one(new_plant).inserted_id # insert one Document
print(new_id) # 5ba523e9df60d3f39ba5f734
print(db.list_collection_names()) # [u'plants'] - now collection exists
```

    Collection(Database(MongoClient(host=['localhost:27017'], document_class=dict, tz_aware=False, connect=True), u'test'), u'plants')
    []
    5ba5438be8cdc3fe013f3d79
    [u'plants']


Add multiple documents:


```python
def add_plants():
    new_plants = [
        {
            'type': 'brinjal',
            'variety': 'Kamo',
            'rating': 9
        },
        {
            'type': 'tomato',
            'variety': 'Green Giant',
            'rating': 9
        },
        {
            'type': 'chilli',
            'variety': 'Chocolate Habanero',
            'rating': 9
        },
        {
            'type': 'chilli',
            'variety': 'Cascabel',
            'rating': 6
        }
    ]
    try:
        return plants.insert_many(new_plants).inserted_ids
    except pymongo.errors.BulkWriteError as bwe:
        return bwe.details['writeErrors']


print(add_plants()) # [ObjectId('5ba5245bdf60d3f39ba5f735'), ...]
print(add_plants()) # [ObjectId('5ba5245bdf60d3f39ba5f737'), ...]

for plant in plants.find({
    'variety': 'Green Giant'
}):
    print(plant)
#     {u'rating': 9, u'_id': ObjectId('5ba5245bdf60d3f39ba5f736'), u'type': u'tomato', u'variety': u'Green Giant'}
#     {u'rating': 9, u'_id': ObjectId('5ba5245bdf60d3f39ba5f738'), u'type': u'tomato', u'variety': u'Green Giant'}
```

    [ObjectId('5ba5438ce8cdc3fe013f3d7a'), ObjectId('5ba5438ce8cdc3fe013f3d7b'), ObjectId('5ba5438ce8cdc3fe013f3d7c'), ObjectId('5ba5438ce8cdc3fe013f3d7d')]
    [ObjectId('5ba5438ce8cdc3fe013f3d7e'), ObjectId('5ba5438ce8cdc3fe013f3d7f'), ObjectId('5ba5438ce8cdc3fe013f3d80'), ObjectId('5ba5438ce8cdc3fe013f3d81')]
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d7b'), u'type': u'tomato', u'variety': u'Green Giant'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d7f'), u'type': u'tomato', u'variety': u'Green Giant'}


We could add multiple documents that are identical. To prevent this, use `create_index()` to create a key (`unique=True`) - in this case a compound key consisting of `type` and `variety`:


```python
deleted = plants.delete_many({
    'variety': {
        '$ne': 'Aji Limo'
    }
})

print (deleted.deleted_count) # 8
plants.create_index([('type', pymongo.DESCENDING), ('variety', pymongo.DESCENDING)], unique=True)

print(add_plants()) # [ObjectId('5ba524badf60d3f39ba5f739'), ...]

print(add_plants()) # ...u'errmsg': u'E11000 duplicate key error collection...

for plant in plants.find({
    'variety': 'Green Giant'
}):
    print(plant)
#     {u'rating': 9, u'_id': ObjectId('5ba524badf60d3f39ba5f73a'), u'type': u'tomato', u'variety': u'Green Giant'}
```

    8
    [ObjectId('5ba5438ce8cdc3fe013f3d82'), ObjectId('5ba5438ce8cdc3fe013f3d83'), ObjectId('5ba5438ce8cdc3fe013f3d84'), ObjectId('5ba5438ce8cdc3fe013f3d85')]
    [{u'index': 0, u'code': 11000, u'errmsg': u'E11000 duplicate key error collection: test.plants index: type_-1_variety_-1 dup key: { : "brinjal", : "Kamo" }', u'op': {'rating': 9, '_id': ObjectId('5ba5438ce8cdc3fe013f3d86'), 'type': 'brinjal', 'variety': 'Kamo'}}]
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d83'), u'type': u'tomato', u'variety': u'Green Giant'}


Update one or multiple documents:


```python
result = plants.update_one(
    {
        'type': {
            "$in": ['chilli', 'tomato', 'brinjal']
        }
    },
    {
        '$set': {
            'family': 'Solanaceae'
        }
    }
)
print(result.matched_count) # 1
print(result.modified_count) # 1

result = plants.update_many(
    {
        'type': {
            "$in": ['chilli', 'tomato', 'brinjal']
        }
    },
    {
        '$set': {
            'family': 'Solanaceae'
        }
    }
)
print(result.matched_count) # 5
print(result.modified_count) # 4

for plant in plants.find():
    print(plant)
```

    1
    1
    5
    4
    {u'rating': 9, u'_id': ObjectId('5ba5438be8cdc3fe013f3d79'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Aji Limo'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d82'), u'type': u'brinjal', u'family': u'Solanaceae', u'variety': u'Kamo'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d83'), u'type': u'tomato', u'family': u'Solanaceae', u'variety': u'Green Giant'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d84'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Chocolate Habanero'}
    {u'rating': 6, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d85'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Cascabel'}


List plants with rating greater than 8:


```python
for plant in plants.find({
    'rating': {
        '$gt': 8
    }
}):
    print(plant)
```

    {u'rating': 9, u'_id': ObjectId('5ba5438be8cdc3fe013f3d79'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Aji Limo'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d82'), u'type': u'brinjal', u'family': u'Solanaceae', u'variety': u'Kamo'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d83'), u'type': u'tomato', u'family': u'Solanaceae', u'variety': u'Green Giant'}
    {u'rating': 9, u'_id': ObjectId('5ba5438ce8cdc3fe013f3d84'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Chocolate Habanero'}


Delete plants with a rating lower than 8:


```python
result = plants.delete_many({
    'rating': {
        '$lt': 8
    }
})
print(result.deleted_count) # 1
```

    1


Get a single document:


```python
aji_limo = plants.find_one({
    'type': 'chilli',
    'variety': 'Aji Limo'
})
print(aji_limo) # {u'rating': 9, u'_id': ObjectId('5ba5438be8cdc3fe013f3d79'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Aji Limo'}
print(aji_limo['rating']) # 9
```

    {u'rating': 9, u'_id': ObjectId('5ba5438be8cdc3fe013f3d79'), u'type': u'chilli', u'family': u'Solanaceae', u'variety': u'Aji Limo'}
    9


Counting plants:


```python
print(plants.count_documents({})) # 4
print(plants.count_documents({
    'type': 'chilli'
})) # 2
```

    4
    2

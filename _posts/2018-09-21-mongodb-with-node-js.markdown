---
layout: post
title:  "MongoDB with Node.js"
categories: [code, notes]
---

See [MongoDB notes]({% post_url 2018-09-21-mongodb %}).

See the [documentation](https://mongodb.github.io/node-mongodb-native/) and [tutorial on CRUD operations using modern JavaScript](http://mongodb.github.io/node-mongodb-native/3.1/reference/ecmascriptnext/crud/).

Create a project:

```
cd node
npm init
npm install mongodb --save
```

Play around in `index.js`. Run `node --inspect-brk index.js` then open from [Chrome Inspect](chrome://inspect)) to play around interactively.

```javascript
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'test';

// Reducer for chain.reduce() in `post` function
function chainBuilder(chained, current) {
  let result;
  if (current.param) {
    result = chained[current.method](current.param);
  } else if (current.params) {
    result = chained[current.method](...current.params);
  } else {
    result = chained[current.method]();
  }

  return result;
}

/**
 * Execute a chain of methods on the `mongodb` `Db` class.
 * @param {Object[]} chain - The sequence of methods to invoke.
 * @param {string} chain[].method - The method name.
 * @param {string} [chain[].param] - A single parameter.
 * @param {string} [chain[].params] - Muliple parameters.
 * @returns {Promise} - Promise containing the `mongodb` response.
 */
async function post(chain) {
  let client;
  try {
    client = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    const db = client.db(dbName);

    return await chain.reduce(chainBuilder, db);
  } catch (error) {
    console.log(error.message);

    return error;
  } finally {
    client.close();
  }
}

(async function() {
  let response;

  // List databases
  response = await post([
    {method: 'admin'},
    {method: 'listDatabases'}
  ]);

  /*
   * { databases:
   *  [ { name: 'admin', sizeOnDisk: 32768, empty: false },
   *    { name: 'config', sizeOnDisk: 73728, empty: false },
   *    { name: 'local', sizeOnDisk: 32768, empty: false },
   *    { name: 'test', sizeOnDisk: 49152, empty: false } ],
   * totalSize: 188416,
   * ok: 1 }
   */
  console.log(response);

  /*
   * Delete `test` database (`const dbName = 'test'` above )
   * It will be created again automatically as we add stuff below
   */
  response = await post([{method: 'dropDatabase'}]);

  // true
  console.log(response);

  // Create a compound key
  await post([
    {
      method: 'collection',
      param: 'plants'
    },
    {
      method: 'createIndex',
      params: [
        {
          type: -1,
          variety: -1
        },
        {unique: true}
      ]
    }
  ]);

  // Helper function to add one or many documents
  function insert(collection, docOrDocs) {
    let action;
    if (docOrDocs instanceof Array) {
      // Even if array length is 1
      action = 'insertMany';
    } else {
      action = 'insertOne';
    }
    const chain = [
      {
        method: 'collection',
        param: collection
      },
      {
        method: action,
        param: docOrDocs
      }
    ];

    return post(chain);
  }

  // Add multiple documents
  const plants = [
    {
      rating: 9,
      type: 'chilli',
      variety: 'Chocolate Habanero'
    },
    {
      rating: 6,
      type: 'chilli',
      variety: 'Cascalbel'
    }
  ];
  response = await insert('plants', plants);

  // 2
  console.log(response.insertedCount);

  // { '0': 5ba66a785f79954e0037ddf2, '1': 5ba66a785f79954e0037ddf3 }
  console.log(response.insertedIds);

  // Add a single document

  const plant = {
    rating: 9,
    type: 'chilli',
    variety: 'Aji Limo'
  };
  response = await insert('plants', plant);

  // 1
  console.log(response.insertedCount);

  // 5ba66a785f79954e0037ddf4
  console.log(response.insertedId);

  // Try to add a duplicate document

  // E11000 duplicate key error...
  await insert('plants', plant);

  // Helper function to find documents
  function find(collection, query) {
    const chain = [
      {
        method: 'collection',
        param: collection
      },
      {
        method: 'find',
        param: query
      },
      {method: 'toArray'}
    ];

    return post(chain);
  }

  // Find documents

  const query = {type: 'chilli'};
  response = await find('plants', query);

  /*
   * [ { _id: 5ba66a785f79954e0037ddf2,
   *   rating: 9,
   *   type: 'chilli',
   *   variety: 'Chocolate Habanero' },
   * { _id: 5ba66a785f79954e0037ddf3,
   *   rating: 6,
   *   type: 'chilli',
   *   variety: 'Cascalbel' },
   * { _id: 5ba66a785f79954e0037ddf4,
   *   rating: 9,
   *   type: 'chilli',
   *   variety: 'Aji Limo' } ]
   */
  console.log(response);

  // Delete average chillies

  response = await post([
    {
      method: 'collection',
      param: 'plants'
    },
    {
      method: 'deleteMany',
      param: {rating: {$lt: 8}}
    }
  ]);

  // 1
  console.log(response.deletedCount);

  // Update documents

  response = await post([
    {
      method: 'collection',
      param: 'plants'
    },
    {
      method: 'updateMany',
      params: [
        {type: {$in: ['chilli', 'tomato', 'brinjal']}},
        {$set: {family: 'Solanaceae'}}
      ]
    }
  ]);

  // 2
  console.log(response.matchedCount);

  // 2
  console.log(response.modifiedCount);

})();
```

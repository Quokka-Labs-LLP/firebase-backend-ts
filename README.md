# Firebase SDK Wrappper Node.js


## Table of Contents

 * [Overview](#overview)
 * [Installation](#installation)
 * [Contributing](#contributing)
 * [Documentation](#documentation)
 * [Supported Environments](#supported-environments)
 * [Acknowledgments](#acknowledgments)
 * [License](#license)


## Overview

[FirebaseWrapper] provides the easy integration of Firebase service into your app
you need to do write less code for the services.


## Installation

The FirebaseWrapper Node.js is available on npm as `@zubair-nazir/firebasewrapper`:

```bash
$ npm install --save @zubair-nazir/firebasewrapper
```

To use the module in your application, `require` it from any JavaScript file:

```js
const firebaseWrapper = require("@zubair-nazir/firebasewrapper")

firebaseWrapper.initializeApp('firebase-config-filename.json');
```
If you are using ES2015, you can `import` the module instead:

```js
import * as firebaseWrapper from "firebase-admin/app";

firebaseWrapper.initializeApp();
```
When initializing app, make sure to keep you service config file in root folder of project
and pass the filename as string param to initializeApp

## Supported Environments

We support Node.js 14 and higher.

Please also note that the Admin SDK should only
be used in server-side/back-end environments controlled by the app developer.
This includes most server and serverless platforms (both on-premise and in
the cloud). It is not recommended to use the Admin SDK in client-side
environments.

## Documentation
[Firestore]:
Once you have initialized app, you can use the firestore queries of fetch,update,delete,add
in more simple ways.

When you need to fetch all records of collection
```js
firebaseWrapper.Firestore.getAllRecords('collection-name');
```
When you need to fetch record of collection by its id
```js
firebaseWrapper.Firestore.getRecordById('collection-name','id');
```
When you need to fetch add record in a collection
```js
firebaseWrapper.Firestore.addRecord('collection-name','{key1:value,key2:value}');
```
When you need to update record in a collection by its id
```js
firebaseWrapper.Firestore.updateRecord('collection-name','id','{key1:value,key2:value}');
```
When you need to delete record in a collection by its id
```js
firebaseWrapper.Firestore.deleteRecord('collection-name','id');
```
[Auth]:
When you need to verify firebase auth token
```js
firebaseWrapper.Auth.verifyToken('jwt-token')
```
[Storage]:
When you need to upload file in a firebase bucket
```js
firebaseWrapper.Storage.uploadFile('local-file-path','destination-path','bucket-name')
```
When you need to download file from a firebase bucket
```js
firebaseWrapper.Storage.downloadFile('source-file-path','destination-path','bucket-name')
```
When you need to delete file from a firebase bucket
```js
firebaseWrapper.Storage.deleteFile('source-file-path','bucket-name')
```
# Housing Website Backend Group

## Description
Backend app for the housing website. 

## Deploy
Currently deployed at https://housing-website-backend.herokuapp.com/


## Google Doc
https://docs.google.com/document/d/1Afcm2kib77B8tUDvUIdRv-KemfBuu1dBft5RqRaChzs/edit?usp=sharing

## Run
### Regular
```bash
cd backend  # if not in Housing_web/backend folder
npm start
```
### Development (live server):
```bash
cd backend
npm -i nodemon # ignore if already downloaded
npm run dev
```

## Port
deploy: https://housing-website-backend.herokuapp.com
local development: localhost:5000

## Routes --- houses
### GET: 
```javascript
/houses/all    // get all houses  
/houses/all?attribute1=value1&attribute2=value2    //get houses with value1 and value2 (and so on) as attributes.Attribute and value must match the attribute name and corresponding value in the database.   
/houses/:id    // get one house by id  
/houses/hot     // get four most popular houses, BUT currently only the first four
```
### POST: 
```javascript
/houses/new  // post a new house
```
Under construction:
```javascript
/houses/:id/newPost // post a new post under a house
/houses/:id/newComment?postId=34h923475862  // post a new comment under a post under a house
```

### DELETE:
```javascript
/houses/:id     // delete a house by id
```

### PATCH:
```javascript
/houses/:id      // edit the data of a house by id
```

# Setting the environment

## install docker-compose
```
sudo apt update
sudo apt install docker-compose -y
```

## Run docker container
```
docker-compose up --build -d
```

## Check the logs of nodejs Server
```
docker-compose logs -f web
```

# Instructions to test APIs
*Note: Using of API testing tools like Postman or Insomnia is much recommended.* 

### /receipts/process
```
API: http://localhost:3000/receipts/process
Method: POST
body: {
    "retailer": "Target",
    "purchaseDate": "2022-01-01",
    "purchaseTime": "13:01",
    "items": [
        {
        "shortDescription": "Mountain Dew 12PK",
        "price": "6.49"
        },{
        "shortDescription": "Emils Cheese Pizza",
        "price": "12.25"
        },{
        "shortDescription": "Knorr Creamy Chicken",
        "price": "1.26"
        },{
        "shortDescription": "Doritos Nacho Cheese",
        "price": "3.35"
        },{
        "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
        "price": "12.00"
        }
    ],
    "total": "35.35"
    }
response: {
    "id": "c4b69614-cb40-4db8-a919-bf3f87db0b2a"
} 
# The response might be different while you are testing.
```

### /receipts/{id}/points
```
API: http://localhost:3000/receipts/c4b69614-cb40-4db8-a919-bf3f87db0b2a/points
Method: GET
response: {
    "points": 28
} 
# The response might be different while you are testing.
```

### /receipts/
```
API: http://localhost:3000/receipts
Method: GET
response: [
    {
        "retailer": "Target",
        "purchaseDate": "2022-01-01T00:00:00.000Z",
        "purchaseTime": "13:01",
        "items": [
            {
                "shortDescription": "Mountain Dew 12PK",
                "price": "6.49"
            },
            {
                "shortDescription": "Emils Cheese Pizza",
                "price": "12.25"
            },
            {
                "shortDescription": "Knorr Creamy Chicken",
                "price": "1.26"
            },
            {
                "shortDescription": "Doritos Nacho Cheese",
                "price": "3.35"
            },
            {
                "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
                "price": "12.00"
            }
        ],
        "total": "35.35",
        "id": "c4b69614-cb40-4db8-a919-bf3f87db0b2a"
    }
] 
# The response might be different while you are testing.
```


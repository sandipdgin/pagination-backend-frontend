# PaginationPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

# Node js Server:

## Request URL:

`http://localhost:5000/api/policy/search`

## Request Method:

`POST`

## Request:

`{"pageNo":1,"pageSize":5}`

## Response:

`{
    "response": [
        {
            "id": 1,
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "discountPercentage": 7.17,
            "rating": 4.94,
            "stock": 5,
            "tags": [
                "beauty",
                "mascara"
            ],
            "brand": "Essence",
            "sku": "RCH45Q1A",
            "weight": 2,
            "dimensions": {
                "width": 23.17,
                "height": 14.43,
                "depth": 28.01
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "Low Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2024-05-23T08:56:21.618Z",
                    "reviewerName": "John Doe",
                    "reviewerEmail": "john.doe@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Not as described!",
                    "date": "2024-05-23T08:56:21.618Z",
                    "reviewerName": "Nolan Gonzalez",
                    "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.618Z",
                    "reviewerName": "Scarlett Wright",
                    "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 24,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.618Z",
                "updatedAt": "2024-05-23T08:56:21.618Z",
                "barcode": "9164035109868",
                "qrCode": "https://dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
        },
        {
        },
    ],
    "message": "Success",
    "pageSize": 5,
    "pageNumber": 1,
    "itemsCount": 39,
    "pageCount": 7.8
}`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

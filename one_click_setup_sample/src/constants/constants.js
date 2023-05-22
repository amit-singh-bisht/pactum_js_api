// constants
let sampleConstants = {
    BSTACKDEMO_URL: 'https://bstackdemo.com',
    SIGNIN: '/api/signin',
    USERNAME: 'demouser',
    PASSWORD: 'testingisfun99',
    PRODUCTS: '/api/products?userName=',
    DEMOQA_URL: 'https://demoqa.com',
    BOOKS: '/BookStore/v1/Books',
    BOOK_ISBN: '/BookStore/v1/Book?ISBN='
}

// specs
let sampleSpec = { 
    BSTACKDEMO_GET_SPEC: [
        'make a get request to /api/products?userName= endpoint to display all dashboard products', // PRODUCTS
    ],
    BSTACKDEMO_POST_SPEC: [
        'make a post request to /api/signin endpoint to login to bstackdemo', // SIGNIN
    ],
    DEMOQA_GET_SPEC: [
        'make a get request to /BookStore/v1/Books endpoint to get all books in demoqa', // BOOKS
        'make a get request to /BookStore/v1/Book?ISBN= endpoint to get all books in demoqa', // BOOK_ISBN
        'make a get request to isbn website endpoint'
    ]
}

// response body
let sampleBody = {
    BSTACKDEMO_SIGNIN_RESPONSE_BODY: {},

    BSTACKDEMO_PRODUCT_DASHBOARD_RESPONSE_BODY: 
    {
        "products": [
            {
                "availableSizes": [
                    "#string"
                ],
                "currencyFormat": "$",
                "currencyId": "USD",
                "description": "#string",
                "id": "#number",
                "installments": "#number",
                "isFav": "#boolean",
                "price": "#number",
                "sku": "#string",
                "title": "#string"
            }
        ]
    },

    DEMOQA_BOOKS_RESPONSE_BODY: {
        "books": [
            {
                "isbn": "#string",
                "title": "#string",
                "subTitle": "#string",
                "author": "#string",
                "publish_date": "#string",
                "publisher": "#string",
                "pages": "#number",
                "description": "#string",
                "website": "#string"
            }
        ]
    },

    DEMOQA_BOOK_ISBN_RESPONSE_BODY: {
        "isbn": "#string",
        "title": "#string",
        "subTitle": "#string",
        "author": "#string",
        "publish_date": "#string",
        "publisher": "#string",
        "pages": "#number",
        "description": "#string",
        "website": "#string"
    }
}

module.exports.sampleConstants = sampleConstants
module.exports.sampleSpec = sampleSpec
module.exports.sampleBody = sampleBody

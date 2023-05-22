const { spec, request } = require('pactum');
const { sampleConstants, sampleBody } = require('../constants/constants.js');
require('../handlers/addAHandler.js');

describe('BStackDemo Test Cases, @regression @bstackdemo', function() {

    let isbn;

    it.concurrent('login to bstackdemo', async () => {
        request.setBaseUrl(sampleConstants.BSTACKDEMO_URL);
        await spec('make a post request to /api/signin endpoint to login to bstackdemo', sampleConstants.SIGNIN)
        .withBody('$F{SigninUsernamePassword}')
        .expectStatus(200)
        .expectJsonLike(sampleBody.BSTACKDEMO_SIGNIN_RESPONSE_BODY);
    });

    it.concurrent('get products displayed on dashboard', async () => {
        request.setBaseUrl(sampleConstants.BSTACKDEMO_URL);
        await spec('make a get request to /api/products?userName= endpoint to display all dashboard products', sampleConstants.PRODUCTS + sampleConstants.USERNAME)
        .expectStatus(200)
        .expectJsonLike(sampleBody.BSTACKDEMO_PRODUCT_DASHBOARD_RESPONSE_BODY);
    });
    
    it.concurrent('get all books displayed on demoqa dashboard', async () => {
        request.setBaseUrl(sampleConstants.DEMOQA_URL);
        isbn = await spec('make a get request to /BookStore/v1/Books endpoint to get all books in demoqa', sampleConstants.BOOKS)
        .expectStatus(200)
        .expectJsonLike(sampleBody.DEMOQA_BOOKS_RESPONSE_BODY)
        .returns('#ISBN');
    });

    it('get book by isbn', async () => { 
        await spec('make a get request to /BookStore/v1/Book?ISBN= endpoint to get all books in demoqa', sampleConstants.BOOK_ISBN + isbn[0])
        .expectStatus(200)
        .expectJsonLike(sampleBody.DEMOQA_BOOK_ISBN_RESPONSE_BODY)
        .stores("website", "#website");
    });

    it('visit oreilly website', async () => { 
        request.setBaseUrl('');
        await spec('make a get request to isbn website endpoint', '$S{website}')
        .expectStatus(200);
    })
})

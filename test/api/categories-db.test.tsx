
import * as pactum from 'pactum';
import {beforeAll, describe, it} from "@jest/globals";


describe('categories api test', () => {
    //before tests take module

    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000/api')
    });

    describe('Categories', () => {

        describe('successful api calls', () => {
            it('should return array with 5 right categories with ids and names', async () => {
                await pactum.spec()
                    .get('/categories')
                    .expectStatus(200)
                    .expectBodyContains({"id": 1, "name": 'Web Exploitation'})
                    .expectBodyContains({"id": 2, "name": "Cryptography"})
                    .expectBodyContains({"id": 3, "name": "Forensics"})
                    .expectBodyContains({"id": 4, "name": "General Skills"})
                    .expectBodyContains({"id": 5, "name": "Binary Exploitation"});
            });
            it('should return array with 3 categories', async () => {
                await pactum.spec()
                    .get('/categories')
                    .expectStatus(200)
                    .expectJsonLength('categories',5);
            });
        });

        describe('unsuccessful api calls', () => {
            it('should not go to the next api route ', async () => {
                await pactum.spec()
                    .get('/categories/1')
                    .expectStatus(404)

            });
            it('should return array with 3 categories', async () => {
                await pactum.spec()
                    .put('/difficulties')
                    .expectStatus(403)
                    .expectBodyContains({ "error" : "Method is not allowed" })
            });
        });

    });

});
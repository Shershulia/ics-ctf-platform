
import * as pactum from 'pactum';
import {beforeAll, describe, expect, it} from "@jest/globals";


describe('difficulties api test', () => {
    //before tests take module

    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000/api')
    });

    describe('Difficulties', () => {

        describe('successful api calls', () => {
            it('should return array with 3 right difficulties with ids and names', async () => {
                await pactum.spec()
                    .get('/difficulties')
                    .expectStatus(200)
                    .expectBodyContains({"id": 1, "name": "Easy"})
                    .expectBodyContains({"id": 2, "name": "Medium"})
                    .expectBodyContains({"id": 3, "name": "Hard"});
            });
            it('should return array with 3 categories', async () => {
                await pactum.spec()
                    .get('/difficulties')
                    .expectStatus(200)
                    .expectJsonLength('difficulties',3);
            });
        });

        describe('unsuccessful api calls', () => {
            it('should not go to the next api route ', async () => {
                await pactum.spec()
                    .get('/difficulties/1')
                    .expectStatus(404)

            });
            it('only get methods', async () => {
                await pactum.spec()
                    .post('/difficulties')
                    .expectStatus(403)
                    .expectBodyContains({ "error" : "Method is not allowed" })
            });
        });

    });

});
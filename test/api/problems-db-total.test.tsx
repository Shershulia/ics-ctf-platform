
import * as pactum from 'pactum';
import {beforeAll, describe, it} from "@jest/globals";


describe('categories api test', () => {
    //before tests take module

    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000/api/problems')
    });

    describe('Total problems    api', () => {

        describe('successful api calls', () => {
            it('get call is working', async () => {
                await pactum.spec()
                    .get('/total')
                    .expectStatus(200);
            });
            it('should return all problems', async () => {
                await pactum.spec()
                    .get('/total')
                    .expectStatus(200)
                    .expectBodyContains({"totalProblems": 10})
            });
        });

        describe('unsuccessful api calls', () => {
            it('should not go to the next api route ', async () => {
                await pactum.spec()
                    .get('/total/1')
                    .expectStatus(404)

            });
            it('Method is not allowed', async () => {
                await pactum.spec()
                    .put('/total')
                    .expectStatus(403)
                    .expectBodyContains({ "error" : "Method is not allowed" })
            });
        });

    });

});
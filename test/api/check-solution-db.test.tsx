
import * as pactum from 'pactum';
import {beforeAll, describe, it} from "@jest/globals";


describe('check solution api test', () => {
    //before tests take module

    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000/api')
    });

    describe('Check solution', () => {

        describe('successful api calls', () => {
            it('get path is working', async () => {
                await pactum.spec()
                    .get('/checkSolution?problemId=1&solution=123')
                    .expectStatus(200)
            });
            it('should return false', async () => {
                await pactum.spec()
                    .get('/checkSolution?problemId=1&solution=123')
                    .expectStatus(200)
                    .expectBodyContains({decision:false});
            });
            it('should return true', async () => {
                await pactum.spec()
                    .get('/checkSolution?problemId=2&solution=CTF-{HEREISANSWER}')
                    .expectStatus(200)
                    .expectBodyContains({decision:true});
            });
        });

        describe('unsuccessful api calls', () => {
            it('should not go to the next api route ', async () => {
                await pactum.spec()
                    .get('/checkSolution/1')
                    .expectStatus(404)

            });
            it('Solution not found for the given problem ID', async () => {
                await pactum.spec()
                    .get('/checkSolution?problemId=0&solution=123')
                    .expectStatus(404)
                    .expectBodyContains({ "error" : 'Solution not found for the given problem ID' })
            });
            it('Invalid or missing problemId', async () => {
                await pactum.spec()
                    .get('/checkSolution?solution=123')
                    .expectStatus(400)
                    .expectBodyContains({ "error" : 'Invalid or missing problemId' })
            });
            it("Method is not allowed", async () => {
                await pactum.spec()
                    .post('/checkSolution?solution=123')
                    .expectStatus(403)
                    .expectBodyContains({ "error" : "Method is not allowed" })
            });

        });

    });

});
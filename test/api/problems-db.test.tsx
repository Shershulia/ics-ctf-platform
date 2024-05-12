
import * as pactum from 'pactum';
import {beforeAll, describe, expect, it} from "@jest/globals";


describe('problems api test', () => {
    //before tests take module

    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000/api')
    });

    describe('Problems', () => {

        describe('successful api calls', () => {
        
            it('should return array with 20', async () => {
                await pactum.spec()
                    .get('/problems')
                    .expectStatus(200)
                    .expectJsonLength('problems',20);
            });
            it('search is working', async () => {
                await pactum.spec()
                    .get('/problems?search=Obedient%20Cat')
                    .expectStatus(200)
                    .expectJsonLength('problems',1);
            });
            
            

            it('category search is working', async () => {
                await pactum.spec()
                    .get('/problems?search=&category=2&difficulty=3&page=1')
                    .expectStatus(200)
                    .expectJsonLength('problems',1);             
                    });
        });

        describe('unsuccessful api calls', () => {
            it('should not go to the next api route ', async () => {
                await pactum.spec()
                    .get('/problems/1')
                    .expectStatus(404)

            });
            it('only get methods', async () => {
                await pactum.spec()
                    .post('/problems')
                    .expectStatus(403)
                    .expectBodyContains({ "error" : "Method is not allowed" })
            });
        });

    });

});

import * as pactum from 'pactum';
import {beforeAll, describe, expect, it} from "@jest/globals";


describe('problems api test', () => {
    //before tests take module

    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000/api')
    });

    describe('Problems', () => {

        describe('successful api calls', () => {
            it('contains first problem', async () => {
                await pactum.spec()
                    .get('/problems')
                    .expectStatus(200)
                    .expectBodyContains({
                        "id": 1,
                        "title": "Obedient Cat",
                        "description": "This file has a flag in plain sight (aka \"in-the-clear\"). Try to find key. You can find it in test-vm opg1.",
                        "points": 5,
                        "attached_file": [],
                        "hints": [
                            "$ man cat"
                        ],
                        "isInTerminal": true,
                        "categoryId": 4,
                        "difficultyId": 1,
                        "createdAt": "2024-04-18T17:46:00.237Z",
                        "category": {
                            "id": 4,
                            "name": "General Skills"
                        },
                        "difficulty": {
                            "id": 1,
                            "name": "Easy"
                        }
                    }
                    )
            });
            //TODO UPDATE AMOUNT OF PROBLEMS
            it('should return array with 13 problems from first page', async () => {
                await pactum.spec()
                    .get('/problems')
                    .expectStatus(200)
                    .expectJsonLength('problems',13);
            });
            it('search is working', async () => {
                await pactum.spec()
                    .get('/problems?search=Obedient%20Cat')
                    .expectStatus(200)
                    .expectBodyContains({
                            "id": 1,
                            "title": "Obedient Cat",
                            "description": "This file has a flag in plain sight (aka \"in-the-clear\"). Try to find key. You can find it in test-vm opg1.",
                            "points": 5,
                            "attached_file": [],
                            "hints": [
                                "$ man cat"
                            ],
                            "isInTerminal": true,
                            "categoryId": 4,
                            "difficultyId": 1,
                            "createdAt": "2024-04-18T17:46:00.237Z",
                            "category": {
                                "id": 4,
                                "name": "General Skills"
                            },
                            "difficulty": {
                                "id": 1,
                                "name": "Easy"
                            }
                        }
                    )            });

            it('category search is working', async () => {
                await pactum.spec()
                    .get('/problems?search=&category=1&difficulty=0&page=1')
                    .expectStatus(200)
                    .expectBodyContains({
                            "id": 3,
                            "title": "Cookie Monster",
                            "description": "Who doesn't love cookies? Try to figure out the best one. Go to the path /problems/cookie-problem",
                            "points": 5,
                            "attached_file": [],
                            "hints": [
                                "How does it connected with cookie?"
                            ],
                            "isInTerminal": false,
                            "categoryId": 1,
                            "difficultyId": 1,
                            "createdAt": "2024-04-18T17:46:00.268Z",
                            "category": {
                                "id": 1,
                                "name": "Web Exploitation"
                            },
                            "difficulty": {
                                "id": 1,
                                "name": "Easy"
                            }
                        }
                    )            });
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
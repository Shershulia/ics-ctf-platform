import {beforeAll, describe, expect, it} from "@jest/globals";
import * as pactum from 'pactum';

//Start test DB before
describe("Category api test", () => {
    beforeAll(async () => {
        pactum.request.setBaseUrl('http://localhost:3000')
        console.log("Resetting database")
        await pactum.spec().get("/api/prisma/reset")
    });

    it("should retrieve categories", async () => {
        return pactum.spec()
            .get('/api/categories')
            .expectStatus(200)
            .expectBody({categories: []})
    });

    describe("Category api POST request", () => {
        it("should create a category", async () => {
            return pactum.spec()
                .post('/api/categories')
                .withJson({
                    name: 'category1'
                })
                .expectStatus(201)
        }
        )
        it("should give error", async () => {
                return pactum.spec()
                    .post('/api/categories')
                    .withJson({
                        notName:""
                    })
                    .expectStatus(400)
                    .expectJson({"error": "Name is required"})
            }
        )
    })
    });

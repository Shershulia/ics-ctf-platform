import {beforeAll, describe, it} from "@jest/globals";
import * as pactum from 'pactum';


describe("Category api test", () => {
    beforeAll(() => {
        pactum.request.setBaseUrl('http://localhost:3000')
        console.log("before all test");
    });

    it("should retrieve categories", async () => {
        return pactum.spec()
            .get('/api/categories')
            .expectStatus(200)
            .expectBody({categories: []})
    });


});
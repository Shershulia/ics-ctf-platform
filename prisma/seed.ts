// seed.ts

const { PrismaClient } = require("@prisma/client");
const Categories = require('./data/categories');
const Difficulties = require('./data/difficulties');

const prisma = new PrismaClient();

async function runSeeders() {
    // Categories
    await Promise.all(
        Difficulties.map(async (difficulty : any) =>
            prisma.difficulty.upsert({
                where : { name: difficulty.name },
                update: {},
                create: difficulty,
            })
        )
    );

    // Difficulties
    await Promise.all(
        Categories.map(async (category : any) =>
            prisma.category.upsert({
                where : { name: category.name },
                update: {},
                create: category,
            })
        )
    );

}

runSeeders()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
        process.exit(1);
    })
    .finally(async () => {
        console.log('Successfully seeded database. Closing connection.');
        await prisma.$disconnect();
    });
// seed.ts

const { PrismaClient } = require("@prisma/client");
const Categories = require('./data/categories');
const Difficulties = require('./data/difficulties');
const Solutions = require('./data/solutions');
const Problems = require('./data/problems');

const prisma = new PrismaClient();

async function runSeeders() {
    // Difficulties
    for (const difficulty of Difficulties) {
        await prisma.difficulty.upsert({
            where: { name: difficulty.name },
            update: {},
            create: difficulty,
        });
    }


    // Categories
    for (const category of Categories) {
        await prisma.category.upsert({
            where: { name: category.name },
            update: {},
            create: category,
        });
    }

    // Problems problems are created sequentially
    for (const problem of Problems) {
        await prisma.problem.upsert({
            where: { title: problem.title },
            update: {},
            create: {
                title: problem.title,
                description: problem.description,
                points: problem.points,
                attached_file: problem.attached_file,
                hints: problem.hints,
                isInTerminal: problem.isInTerminal,
                category: { connect: { id: problem.categoryId } },
                difficulty: { connect: { id: problem.difficultyId } },
            },
        });
    }

    // Solutions
    await Promise.all(
        Solutions.map(async (solution : any) =>
            prisma.solution.upsert({
                where: { problemId: solution.problemId }, // Use problemId to uniquely identify the solution
                update: {},
                create: {
                    solution: solution.solution,
                    problem: { connect: { id: solution.problemId } }, // Connect the solution to the problem
                },
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
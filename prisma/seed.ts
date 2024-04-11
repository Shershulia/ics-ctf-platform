// seed.ts

const { PrismaClient } = require("@prisma/client");
const Categories = require('./data/categories');
const Difficulties = require('./data/difficulties');
const Solutions = require('./data/solutions');
const Problems = require('./data/problems');

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

    // Problems
    await Promise.all(
        Problems.map(async (problem : any) =>
            prisma.problem.upsert({
                where : { title: problem.title },
                update: {},
                create: {
                    title: problem.title,
                    description: problem.description,
                    points: problem.points,
                    attached_file: problem.attached_file,
                    hints: problem.hints,
                    isInTerminal: problem.isInTerminal,
                    category: { connect: { id: problem.categoryId } }, // Provide categoryId to connect to existing category
                    difficulty : { connect: { id: problem.difficultyId } },
                },
            })
        )
    );

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
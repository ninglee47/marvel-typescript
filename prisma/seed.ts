// 1
import { PrismaClient } from "@prisma/client";
//let json = require('../lib/Avengers_Disassembled_ready.json');
//let json = require('../lib/House_of_M_ready.json');
let json = require('../lib/Civil_War_ready.json');

// 2
const prisma = new PrismaClient();

// 3
async function main() {
    //await prisma.avengers_Disassembled.createMany({
    //    data: json
    //});
    await prisma.civil_War.createMany({
        data: json
    });
}

// 4
main()
    .catch((e) => {
        throw e;
    })
    // 5
    .finally(async () => {
        await prisma.$disconnect();
    });
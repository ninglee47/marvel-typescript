// 1
import { PrismaClient } from "@prisma/client";
let json_Avengers_Disassembled = require('../lib/Avengers_Disassembled_ready.json');
let json_House_of_M = require('../lib/House_of_M_ready.json');
let json_civil_war = require('../lib/Civil_War_ready.json');

// 2
const prisma = new PrismaClient();

// 3
async function main() {
    await prisma.avengers_Disassembled.createMany({
        data: json_Avengers_Disassembled
    });
    await prisma.civil_War.createMany({
        data: json_civil_war
    });
    await prisma.house_Of_M.createMany({
        data: json_House_of_M
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
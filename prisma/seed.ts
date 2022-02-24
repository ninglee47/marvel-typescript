// 1
import { PrismaClient } from "@prisma/client";
let json = require('../lib/Avengers_Disassembled_ready.json');

// 2
const prisma = new PrismaClient();

// 3
async function main() {
    await prisma.avengers_Disassembled.createMany({
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
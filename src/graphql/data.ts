import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Data = objectType({
    name: "Data", 
    definition(t) { 
        t.nonNull.int("id"); 
        t.nonNull.string("title"); 
        t.nonNull.string("img"); 
        t.nonNull.string("url");  
    },
});

export const LinkQuery = extendType({  
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   
            type: "Data",
            resolve(parent, args, context, info) {    
                return context.prisma.avengers_Disassembled.findMany();
            },
        });
    },
});
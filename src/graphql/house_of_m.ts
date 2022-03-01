import { extendType, objectType } from "nexus";

export const House_Of_M = objectType({
    name: "House_Of_M", 
    definition(t) { 
        t.nonNull.int("id"); 
        t.nonNull.string("title"); 
        t.nonNull.string("img"); 
        t.nonNull.string("url"); 
    },
});

export const House_Of_M_query = extendType({  
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed_house_Of_M", {   
            type: "House_Of_M",
            resolve(parent, args, context, info) {    
                return context.prisma.house_Of_M.findMany();
            },
        });
    },
});
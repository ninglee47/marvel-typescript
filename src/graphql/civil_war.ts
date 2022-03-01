import { extendType, objectType } from "nexus";

export const Civil_War = objectType({
    name: "Civil_War", 
    definition(t) { 
        t.nonNull.int("id"); 
        t.nonNull.string("title"); 
        t.nonNull.string("img"); 
        t.nonNull.string("url"); 
    },
});

export const Civil_War_query = extendType({  
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed_civil_War", {   
            type: "Civil_War",
            resolve(parent, args, context, info) {    
                return context.prisma.civil_War.findMany();
            },
        });
    },
});
import {z} from "zod";

import {
    createTRPCRouter, publicProcedure
} from "~/server/api/trpc";


export const penWorldServiceRouter = createTRPCRouter({
    createUser: publicProcedure
        .input(z.object({
            username: z.string(),
            password: z.string(),
            name: z.string(),
            email: z.string(),
            role: z.string(),
            europencode: z.string(),
        }))
        .mutation(({input, ctx}) => {
            return ctx.prisma.user.create({
                data: {
                    username: input.username,
                    password: input.password,
                    name: input.name,
                    email: input.email,
                    role: input.role,
                    europencode: input.europencode,
                }
            });
        })
});


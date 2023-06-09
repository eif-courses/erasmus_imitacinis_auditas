import { withAuth } from "next-auth/middleware"

// export default withAuth(
//     // `withAuth` augments your `Request` with the user's token.
//     function middleware(req) {
//         console.log(req.nextauth.token);
//     },
//     {
//         callbacks: {
//             authorized: ({ token }) => token?.role === 'teacher',
//         },
//     },
// )
//
// export const config = { matcher: ["/tasks","/students","/info"] }

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            // `/admin` requires admin role
            if (req.nextUrl.pathname === "/tasks") {
                return token?.role === "teacher"
            }
            // `/me` only requires the user to be logged in
            return !!token
        },
    },
})

export const config = { matcher: ["/tasks", "/students"] }

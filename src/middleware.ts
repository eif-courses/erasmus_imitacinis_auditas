import { withAuth } from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log(req.nextauth.token);

        const headers = new Headers(req.headers);
        headers.set('x-middleware-cache', 'no-cache');

    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === 'teacher',
        },
    },
)

export const config = { matcher: ["/tasks","/students","/info"] }

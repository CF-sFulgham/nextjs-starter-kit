This is a next-js-starter kit for Creation Foundation bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
### Authentication Setup with Clerk

To enable authentication, use [Clerk](https://clerk.com/):

1. **Sign Up and Create a Project**  
    - Register for a free Clerk account (up to 10,000 users).
    - Create a new project named **nextjs-starter-kit**.

2. **Configure OIDC Providers**  
    - During project setup, select **Google** and **GitHub** as authentication providers.

3. **Obtain Environment Variables**  
    - Follow the [Clerk Next.js Quickstart](https://clerk.com/docs/quickstarts/nextjs) for integration steps.
    - Retrieve your `SECRET_KEY` and `PUBLISHABLE_KEY` from the Clerk dashboard.

4. **Set Up Environment Variables**  
    - Create a `.env` file in the project root and add the following keys:

      ```env
      CLERK_SECRET_KEY=your-secret-key
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
      NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
      ```

Refer to the [Clerk environment variables documentation](https://clerk.com/docs/deployments/clerk-environment-variables) for more details.

### Running the project
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

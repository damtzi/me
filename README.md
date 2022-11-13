# My personal monorepo

This is a monorepo containing my website. Built with [Turborepo](https://turbo.build/repo) + [SvelteKit](https://kit.svelte.dev/) + [tailwindcss](https://tailwindcss.com/).

### Apps and Packages

-   `solveet.io`: a [SvelteKit](https://kit.svelte.dev/) app
-   `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
-   `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev:solveet:io
```

### Useful Links

Learn more about the power of Turborepo:

-   [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

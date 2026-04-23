# Apps Workspace

This directory is reserved for Sanity App SDK packages.

Each app should live in its own subdirectory, for example:

- `apps/provider-assistant`
- `apps/data-quality-tools`

Each subdirectory should include its own `package.json` and source files.

Because the root workspace includes `apps/*`, any package you add here is automatically part of the monorepo.

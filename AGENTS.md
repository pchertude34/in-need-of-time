# in-need-of-time

> **Note:** `CLAUDE.md` is a symlink to this file.

"In Need of Time" helps people in crisis (single moms, people experiencing homelessness, people recently released from prison) find providers — health clinics, food banks, shelters, free-clothing programs, and similar services. Provider content lives in Sanity CMS; a Next.js app is the public-facing site.

## Monorepo layout

npm workspaces, defined in root `package.json`: `["studio", "frontend", "apps/*", "packages/*"]`.

| Workspace                                                                       | Package name                          | What it is                                                                                                                                       | Run it                           |
| ------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| `frontend/`                                                                     | `@in-need-of-time/frontend`           | Next.js 16 public site                                                                                                                           | `npm run frontend`               |
| `studio/`                                                                       | `@in-need-of-time/studio`             | Sanity Studio CMS admin                                                                                                                          | `npm run studio`                 |
| `apps/ai-provider-editor/`                                                      | `@in-need-of-time/ai-provider-editor` | Sanity App SDK app; currently a stub                                                                                                             | `npm run app:ai-provider-editor` |
| `packages/agent-core/`                                                          | `@in-need-of-time/agent-core`         | AI agent runtime — Vercel AI SDK `ToolLoopAgent` + DBOS + a custom event bus (`src/bus.ts`); active WIP, `src/memory.ts` is an empty placeholder | `npm run agent:dev`              |
| `packages/api/`                                                                 | `@in-need-of-time/api`                | Express server; currently just `GET /health`                                                                                                     | `npm run api:dev`                |
| `packages/db/`                                                                  | `@in-need-of-time/db`                 | Drizzle ORM / Postgres (Neon) — exports `db`, `agentAuditLogTable`, `agentEventLog`                                                              | —                                |
| `packages/components/`, `packages/hooks/`, `packages/types/`, `packages/utils/` | `@in-need-of-time/*`                  | Shared libraries consumed by the apps above                                                                                                      | —                                |

`apps/*` is reserved specifically for Sanity App SDK apps (see `apps/README.md`) — it's not a general-purpose "apps" folder.

## Commands

Package manager is npm workspaces (no yarn/pnpm lockfiles). Node is pinned via `.nvmrc` (v22) — run `nvm use` before working here.

Root-level scripts to know (see `package.json` for the full list):

- `npm run db:start` / `db:stop` / `db:reset` — local Postgres via Docker (see below)
- `npm run db:push` / `db:migrate` / `db:studio` — Drizzle schema sync / migrations / local DB viewer
- `npm run frontend` / `npm run studio` / `npm run agent:dev` / `npm run api:dev` / `npm run app:ai-provider-editor` — run each workspace's dev server
- `npm run format` / `npm run format:check` — Prettier across the repo

Every workspace also has its own `type-check` script (`npm run type-check -w <package-name>`) — run it after touching that workspace's code.

## Conventions

- **Formatting**: Prettier via `.prettierrc` (120 print width, `prettier-plugin-tailwindcss`), enforced pre-commit via `simple-git-hooks` (`pretty-quick --staged`). Don't hand-format against a different width.
- **Linting**: no root ESLint config. `frontend/` and `studio/` each have their own `.eslintrc`; other packages have none.
- **TypeScript**: root `tsconfig.json` sets `strict: true`; every workspace extends it.
- **Env vars**: copy `.env.example` → `.env.local`. Variables are grouped by domain — `NEXT_PUBLIC_*`/`OPENAI_API_KEY`/`FIRECRAWL_API_KEY` for the frontend, `DATABASE_URL` for `packages/db`, `SANITY_STUDIO_*` for studio, `SANITY_APP_*` for `apps/*`. New variables should follow this grouping: add a placeholder to `.env.example` alongside the real value in `.env.local`.
- **Local Postgres**: `npm run db:start` spins up an ephemeral Neon branch via Docker (`neon-local`), not a plain Postgres container. `npm run db:reset` destroys and recreates it — anything not migrated/persisted in Neon itself is lost.

## Contributing as an agent

- **New packages go in `packages/`.** It's the catch-all workspace for shared libraries and backend-ish services (`agent-core`, `api`, `db`, `components`, `hooks`, `types`, `utils`). Don't create a new top-level workspace folder or drop code into `apps/*` (reserved for Sanity App SDK apps, see above) unless the developer specifically directs you to place it elsewhere.
- **Every runnable package needs a root-level forwarding script.** The root `package.json` doesn't run workspace code directly — it forwards to `npm run -w <package-name> <script>`, optionally wrapped in `dotenv -e ./.env.local --` when the script needs env vars. Follow the existing naming: the script name matches (or is prefixed by) the package's directory name, and the workspace-local script name (`dev`, `build`, `start`, `db:push`, etc.) is preserved on the other side of `-w`. For example:

  ```json
  "agent:dev": "dotenv -e ./.env.local -- npm run -w @in-need-of-time/agent-core dev",
  "db:push": "dotenv -e ./.env.local -- npm run -w @in-need-of-time/db db:push",
  "api:dev": "npm run -w @in-need-of-time/api dev"
  ```

  When you add a new package with a `dev`, `build`, or `start` script, add the matching root-level forwarding script in the same style — don't leave it only reachable via `npm run -w`.

- Give every new package a `type-check` script (`tsc --noEmit`), matching every existing workspace — there's no root-level aggregate type-check, so each package must be independently checkable.

### General code style

- **Constant exports go at the top of the file**, where applicable — before the functions that use them, not interspersed or appended at the bottom.
- **Use function declarations for top-level functions**, where applicable. Prefer arrow functions for inline/callback functions (e.g. passed to `.map`, `.filter`, event handlers, `DBOS.runStep`).

## Testing

There are no tests anywhere in this repo yet — no `*.test.ts`/`*.spec.ts` files, no vitest/jest/playwright config. Don't assume an existing test convention or framework; ask before introducing one.

## Skills

`.agents/skills/` has `ai-sdk` and `dbos-typescript` skills already installed (tracked in `skills-lock.json`). Consult them (per their own trigger rules) whenever touching AI SDK or DBOS code — don't write that code from memory, since both APIs change frequently across versions.

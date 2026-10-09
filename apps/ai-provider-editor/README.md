# AI Provider Editor

Sanity App SDK app for AI-assisted provider discovery and curation. It talks to
`packages/api` (the provider agent) over HTTP and a websocket.

## Running locally

```sh
npm run app:ai-provider-editor   # from the repo root
npm run api:dev                  # in another shell — the app needs it
```

**Open the app through the Dashboard, not the dev server directly:**

```
https://www.sanity.io/@ogs95D1E1?dev=http://localhost:3333
```

`sanity dev` prints this URL on startup, and `sanity dev --load-in-dashboard`
opens it for you.

Visiting `http://localhost:3333` on its own renders the app but leaves it signed
out — the Dashboard is what supplies authentication, by loading the app in an
iframe with an auth code the SDK exchanges for a token. Without it
`getTokenState(instance).getCurrent()` stays `null`, `useCurrentUser()` returns
nothing, and every call to the provider agent API fails with a 401, because
there's no Sanity session to trade for one.

Use a browser other than Safari while developing — Safari's mixed-content rules
block the Dashboard from loading a local app over http.

## Import everything from `@sanity/sdk-react`, never `@sanity/sdk`

`@sanity/sdk-react` does `export * from "@sanity/sdk"`, so everything the core
SDK exports — `resolveQuery`, `getTokenState`, `createDocument`, the types — is
available from it, and they're the same function objects.

Import them from `@sanity/sdk-react` only. `@sanity/sdk` is deliberately **not**
a dependency of this package.

The reason is that `@sanity/sdk-react@X` depends on `@sanity/sdk@X` _exactly_.
If anything else in the monorepo holds a different `@sanity/sdk` version, npm
nests a second copy, and a direct import here resolves to a different module
instance than the one `SanityApp` set up. The SDK keeps auth and client state in
module scope, so the two copies don't share it: `getTokenState()` returns `null`
even while signed in, and every `resolveQuery` / `createDocument` call runs
against an unauthenticated store. It fails silently and looks like a React
context bug.

Going through `@sanity/sdk-react` means you always get _its_ copy, so the
duplication can't split them apart.

## Authentication

The app holds the user's Sanity token, which is **global**: it reaches every
organization and project that user can, and refreshes every 12 hours. It is
never sent to the provider agent API on ordinary requests. Instead
`src/api/session.ts` trades it once, at `POST /auth/session`, for a short-lived
session of the API's own, and everything afterwards carries that.

The API grants a session only to users holding `sanity.document.filter.mode` on
this project — that is, members of it. Everyone who gets in has full use of every
route; there is no per-route authorization.

The permission name is `<type>.<action>`, and the action is the literal word
`mode` — a granted entry reads
`{ type: "sanity.document.filter.mode", action: "mode", params: { mode: "publish" } }`.
`sanity.document.filter.read` / `.update` / `.publish` all report `false` even
for an Administrator, because they spell an action that doesn't exist; the
strength of the grant lives in `params.mode`.

The Access API's `/check` endpoint evaluates the coarse `(resource, action)` pair
only and ignores `params`, so this gate says _whether_ someone has document
access, not how much — a read-only Viewer passes too. Telling roles apart means
reading `params.mode` from the `user-permissions/me` listing instead.

# AGENTS.md

## General principles

- Base decisions only on verified requirements, repository code, official
  documentation and observed behavior. Do not invent facts, metrics, APIs or
  product constraints.
- Read the relevant GitHub issue before changing code. Work on open issues in
  priority order: `P0` first, then `P1`, then `P2`. Respect explicit
  dependencies and acceptance criteria.
- Keep changes within the issue scope. Preserve unrelated work.
- Use Nuxt 4, Vue 3, TypeScript and `<script setup>`.

## Architecture

- Follow separation of concerns: page composition, presentation, state,
  business logic and infrastructure must not be mixed without a reason.
- Do not implement an entire feature in one file. Extract a subcomponent,
  composable, utility or typed data model when it has an independent
  responsibility, reusable behavior or non-trivial logic.
- Do not split code mechanically. A new abstraction must improve cohesion,
  reuse, testing or readability.
- Search the codebase before writing new code. Reuse and adapt existing
  components, composables, utilities, types, styles and design tokens whenever
  they satisfy the requirement.
- Prefer composition over duplication. Keep dependencies directed from
  high-level UI toward stable interfaces and framework-independent logic.
- Keep reusable logic outside Vue components when it does not depend on the
  component lifecycle.
- Use strict types. Avoid `any`, implicit contracts and duplicated type
  definitions.

## Components and documentation

- Give components and functions names that describe their responsibility.
- Keep component props and emitted events explicit and typed.
- Document every component with a short description of its responsibility.
- Document functions with JSDoc, including parameters, return value and
  important side effects or invariants. Do not write comments that merely
  repeat the code.
- Add examples only when correct usage is not obvious from the signature.
- Update documentation whenever behavior or a public contract changes.

## Nuxt and performance

Follow the official
[Nuxt 4 performance best practices](https://nuxt.com/docs/4.x/guide/best-practices/performance).
In particular:

- preserve SSR-safe and deterministic rendering; avoid hydration mismatches;
- use `NuxtLink` for application navigation;
- lazy-load components and hydrate them lazily only when they are not required
  for initial content or interaction;
- use `useFetch` or `useAsyncData` for SSR-aware data fetching;
- optimize images, provide dimensions and load non-critical media lazily;
- minimize plugins, client-side JavaScript and third-party scripts;
- remove unused dependencies and code;
- measure before optimizing with Nuxt DevTools, bundle analysis, browser
  performance tools or Lighthouse.

The project is statically generated for GitHub Pages. Do not introduce a
runtime server dependency or break the configured base path.

## Quality

- Prefer semantic HTML and native controls. Preserve keyboard access, visible
  focus, readable error states and reduced-motion support.
- Add or update tests for business logic, reusable utilities and interactive
  state.
- Do not commit generated output, dependencies, credentials or environment
  files.
- Before completing a task, run:

```bash
npm run lint
npm run typecheck
npm run test
NUXT_APP_BASE_URL=/snapbuild-test-task/ npm run generate
```

- Verify relevant behavior in the browser. A successful build is not proof of
  correct layout or interaction.

## Commits

Use Conventional Commits:

```text
<type>(optional-scope): <imperative summary>
```

Allowed types: `feat`, `fix`, `refactor`, `perf`, `test`, `docs`,
`style`, `build`, `ci`, `chore`, `revert`.

- Keep the subject concise, imperative and without a trailing period.
- Each commit must represent one coherent change and leave the project in a
  valid state.
- Reference the related issue in the commit body or pull request.
- Explain the reason and impact in the body when they are not obvious.
- Mark breaking changes with `!` and a `BREAKING CHANGE:` footer.
- Do not mix unrelated refactoring, formatting and feature changes.

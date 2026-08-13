# AGENTS.md

## Project mission

Build and publish a polished continuation of the Russian product landing page
for [Snapbuild](https://snapbuild.ru/). The result is a hiring test task, so
visual judgment, product storytelling, responsive behavior, code clarity, and
the ability to explain decisions matter more than raw feature count.

The final page must combine recognizable existing Snapbuild sections with five
new, substantial sections:

1. use cases;
2. implementation process;
3. measurable impact;
4. customer stories;
5. demo request form.

New sections must feel native to the original page. Do not turn the project
into a generic SaaS template or a gallery of disconnected cards.

## Source of truth

Before changing scope, consult these sources in this order:

1. the GitHub issue assigned to the work;
2. the original test assignment;
3. the current public site at `https://snapbuild.ru/`;
4. this file;
5. `README.md`.

Track the delivery plan in GitHub issue #11. Work in dependency order:
`#1 -> #2 -> (#3...#7) -> #8 -> #9 -> #10`.

If the live site changes, document the observation date and the specific
patterns used. Do not silently redesign the page around a new unrelated style.

## Technical baseline

- Nuxt 4, Vue 3, TypeScript, Composition API and `<script setup>`.
- Static generation via `npm run generate`.
- Deployment target: GitHub Pages project site.
- Production base path: `/snapbuild-test-task/`.
- Node.js 22 or newer.
- Styling: project CSS and design tokens; no external UI kit.
- Tests: Vitest.
- Formatting and static checks: ESLint and Nuxt typecheck.

Do not add a server API, secrets, paid service, database, authentication, or
runtime-only dependency unless an issue explicitly requires it. Everything
needed for the submitted page must work as a static site.

## Repository map

- `app/app.vue`: page composition only; keep business logic out.
- `app/components/`: page sections and reusable presentational components.
- `app/assets/css/main.css`: global tokens, shared primitives and responsive
  rules. Split it only when doing so makes ownership clearer.
- `app/utils/`: framework-independent logic that can be unit-tested.
- `tests/`: behavior-focused tests.
- `.github/workflows/deploy.yml`: checks and GitHub Pages deployment.
- `docs/`: research and decision records, including the design audit.

Use PascalCase for Vue components, camelCase for TypeScript identifiers, and
kebab-case for non-component filenames. Prefer descriptive product names such
as `UseCasesSection.vue` over numbered or generic names such as
`SectionThree.vue`.

## Product and content rules

- Write concise, natural Russian copy appropriate for a B2B product.
- Preserve the core promise: teams create marketing materials quickly while
  remaining inside the company's brand and design system.
- Use non-breaking spaces in rendered Russian text where they materially
  improve typography, but keep source code readable.
- Never use Lorem Ipsum.
- Do not present invented metrics, customer quotes, logos, or company names as
  verified facts. Clearly mark illustrative content or use neutral examples.
- A section must communicate a complete idea, not merely add one card or line.
- Every CTA must lead somewhere meaningful on the same static page or to an
  intentional external destination.

## Visual implementation rules

Analyze before inventing. Reuse the original site's visual grammar:

- large expressive headings with tight tracking;
- restrained monochrome surfaces with deliberate bright accents;
- generous whitespace and a consistent vertical rhythm;
- rounded cards and containers used purposefully, not everywhere;
- contrast between light and dark sections;
- subtle motion that supports hierarchy.

Define reusable values as CSS custom properties. Prefer fluid typography and
layout primitives such as `clamp()`, CSS Grid and Flexbox. Avoid isolated
magic values, arbitrary colors, copy-pasted card styles and utility classes
that encode one-off visual accidents.

Do not copy a third-party section or introduce an unrelated design system.
Original graphics may be recreated, but respect licensing and do not hotlink
assets that the project does not control.

## Component and state rules

- Keep components focused on one section or reusable interaction.
- Represent repeated content as typed data and render it with `v-for`.
- Extract logic when it is reusable or independently testable; do not create
  abstractions solely to reduce line count.
- Prefer semantic HTML before adding ARIA.
- Interactive controls must use native buttons, links, inputs and form
  elements where possible.
- Make state explicit: idle, active, loading, error, success and disabled.
- The demo form is client-side only. It must validate and simulate success
  without transmitting personal data.
- Avoid hydration-dependent layout and nondeterministic SSR output.

## Responsive and accessibility contract

Treat 375 px, 768 px, 1280 px and 1440 px as mandatory review widths.

At every width:

- no horizontal page scroll;
- no clipped copy, controls or decorative content;
- grids collapse in a deliberate reading order;
- tap targets remain practical;
- text remains readable without zoom;
- sticky navigation does not hide anchored content.

All functionality must be usable with a keyboard. Provide visible focus,
associated form labels, useful error messages, meaningful alt text for content
images, and appropriate decorative-image treatment. Honor
`prefers-reduced-motion`. Do not use color alone to communicate state.

## Performance and asset rules

- Prefer CSS, SVG and optimized local images over heavy runtime graphics.
- Specify image dimensions or aspect ratios to prevent layout shift.
- Lazy-load below-the-fold media when appropriate.
- Keep dependencies intentional; explain any new production dependency in the
  related issue or pull request.
- Do not commit generated directories such as `.nuxt/`, `.output/`,
  `dist/` or `node_modules/`.
- Do not commit credentials or local environment files.

## Required workflow

Before implementation:

1. read the relevant issue and its acceptance criteria;
2. inspect adjacent components and existing tokens;
3. identify whether the work depends on an unfinished issue;
4. state any assumption that changes content or visual direction.

During implementation:

1. keep the page runnable after each coherent change;
2. preserve unrelated user work;
3. update or add tests for reusable logic and interaction state;
4. verify both desktop and mobile behavior, not only the happy viewport;
5. keep the issue scope focused.

Before completion, run:

```bash
npm run lint
npm run typecheck
npm run test
NUXT_APP_BASE_URL=/snapbuild-test-task/ npm run generate
```

Then inspect the generated page at the mandatory widths and check the browser
console. A successful build alone is not visual QA.

## Git and GitHub rules

- Reference the issue in the branch, commit or pull request.
- Prefer small, reviewable commits with imperative messages.
- Do not mix formatting churn or unrelated refactors into feature work.
- Do not close an issue until every acceptance criterion is verified.
- Update issue #11 when a child issue is completed.
- Use a draft pull request while visual or acceptance work remains.
- Never commit directly over unrelated changes or rewrite shared history.

## Definition of done

Work is done only when:

- the issue acceptance criteria are satisfied;
- the section fits the page's product narrative and visual language;
- required responsive widths were reviewed;
- keyboard and form states were reviewed where relevant;
- lint, typecheck, tests and static generation pass;
- no critical browser-console error remains;
- documentation reflects any material decision or limitation;
- the GitHub Pages base path still works.

For final delivery, the public page must open without authorization and
`README.md` must accurately describe the implemented five sections, design
analysis, reproduced source sections, limitations, possible improvements and
AI usage.

# i18n Builder

Custom build tool that compiles per-route translation files into the single-file-per-locale format that `next-intl` expects.

## How it works

The builder (`index.ts`) performs these steps:

1. **Collects** all `.json` files recursively from `i118builder/messages/`.
2. **Identifies the locale** from the filename (e.g. `en.json`, `es.json`).
3. **Derives a namespace** from the folder path relative to `messages/`.
   Route groups in parentheses — e.g. `(marketing)` — are stripped automatically.
4. **Wraps** each file's content inside a nested object that mirrors the folder hierarchy.
5. **Deep-merges** all files that share the same locale.
6. **Outputs** one compiled JSON per locale into the root `/messages/` directory (e.g. `messages/en.json`).

### Example

Given this source structure:

```
i118builder/messages/
└── landing/
    └── home/
        ├── en.json   { "HomePage": { "title": "Hello" } }
        └── es.json   { "HomePage": { "title": "Hola" } }
```

The builder produces:

```jsonc
// messages/en.json
{
  "landing": {
    "home": {
      "HomePage": { "title": "Hello" },
    },
  },
}
```

Usage in components:

```ts
const t = useTranslations('landing.home.HomePage')
t('title') // -> "Hello"
```

## Scripts

| Command                     | Description                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `npm run dev`               | Runs the builder in **watch mode** alongside `next dev` (auto-rebuilds on file changes with a 300 ms debounce). |
| `npm run build`             | Runs the builder once, then `next build`.                                                                       |
| `npm run i18n:build`        | Runs the builder once (standalone).                                                                             |
| `npm run i18n-check`        | Checks that all locales have the same keys as `en`.                                                             |
| `npm run i18n-check-unused` | Detects translation keys not referenced in `src/`.                                                              |

## How the i18n system fits together

```
i118builder/messages/**/*.json     <-- source translations (edit these)
        |
        v
   i118builder/index.ts            <-- this builder
        |
        v
   messages/<locale>.json          <-- compiled output (git-ignored / auto-generated)
        |
        v
   src/i18n/routing.ts             <-- central next-intl routing config (locales, default, pathnames)
        |
   consumed by:
   ├── src/proxy.ts                <-- Next.js middleware: locale negotiation, redirects, cookie updates
   ├── src/i18n/navigation.ts      <-- locale-aware Link, redirect, useRouter, usePathname, getPathname
   └── src/i18n/request.ts         <-- server request config: resolves locale + loads compiled messages
```

## Adding a new locale

1. Add the locale code to the `locales` array in `src/i18n/locales.ts`.
2. Create the corresponding `<locale>.json` files in each `i118builder/messages/` subdirectory.
3. Run `npm run i18n:build` (or let watch mode pick it up in dev).

## Configuring localized pathnames

The `pathnames` option in `src/i18n/routing.ts` is currently empty — all routes share the same path across locales. To add translated URLs see:
https://next-intl.dev/docs/routing/configuration#pathnames

# Vite SSG Demo

This is a minimal reproduction case for vite-ssg v27.0.0 non-flat mode path issue.

## Setup

```bash
yarn
```

### Production Build
```bash
yarn build
```

### Issue Description

When building with vite-ssg v27.0.0 in non-flat mode, the generated paths in the output are incorrect. This repo demonstrates the issue with a simple two-page setup (Home and About pages).

To reproduce:
1. Run `yarn build`
2. Check the generated files in `dist`
3. Notice the incorrect path resolution in non-flat mode

Related to issue: [Issue URL]

# Tailwind Config

This is just a way to keep the common styling of my projects in sync. Pull requests will **not** be accepted aside from bug fixes.

## Container

Tailwind's included container is disabled in favor of my own.

The following variables used in `tailwind.config.js` have defaults defined within `:root` in CSS, and can be overridden in your own CSS:

- `--ct-max` - Maximum width of `.container`
- `--ct-padding` - Padding within the maximum width of `.container`

**Example:**

```scss
:root {
  --ct-padding: theme("spacing.4");
  --ct-max: theme("screens.min-md");

  @screen min-xs {
    --ct-padding: theme("spacing.5");
  }

  @screen min-sm {
    --ct-padding: theme("spacing.10");
  }
}
```

`.container` can be used with responsive modifiers like any other Tailwind utility. Ex. `min-md:container`

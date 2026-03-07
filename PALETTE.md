# HTX Web Co. Color Palette

## Primary Colors (Sky Blue Scale)

| Role       | Hex       | CSS Variable            | Name        | Usage                          |
|------------|-----------|-------------------------|-------------|--------------------------------|
| **Light**  | `#B5D8F0` | `--color-primary-200`   | Ice Blue    | Backgrounds, light accents     |
| **Base**   | `#67ACE0` | `--color-primary-400`   | Sky Blue    | Primary brand color            |
| **Deep**   | `#3A7CA8` | `--color-primary-600`   | Steel Blue  | Hover states, emphasis         |
| **Navy**   | `#1E4B6E` | `--color-primary-800`   | Deep Navy   | Text, dark elements            |

## Extended Primary Scale

| Level | Hex       | CSS Variable            | Usage                          |
|-------|-----------|-------------------------|--------------------------------|
| 50    | `#EBF5FC` | `--color-primary-50`    | Lightest backgrounds           |
| 100   | `#D1E8F7` | `--color-primary-100`   | Light hover backgrounds        |
| 200   | `#B5D8F0` | `--color-primary-200`   | **Ice Blue** - light accents   |
| 300   | `#8DC4E8` | `--color-primary-300`   | Light sky                      |
| 400   | `#67ACE0` | `--color-primary-400`   | **Sky Blue** - brand primary   |
| 500   | `#4A90C4` | `--color-primary-500`   | Medium blue - primary actions  |
| 600   | `#3A7CA8` | `--color-primary-600`   | **Steel Blue** - hover states  |
| 700   | `#2B6690` | `--color-primary-700`   | Dark - active states           |
| 800   | `#1E4B6E` | `--color-primary-800`   | **Deep Navy** - pressed states |
| 900   | `#14354F` | `--color-primary-900`   | Dark backgrounds               |
| 950   | `#0A1F2F` | `--color-primary-950`   | Near black                     |

## Accent Color (Soft Teal)

| Role       | Hex       | CSS Variable            | Name        | Usage                          |
|------------|-----------|-------------------------|-------------|--------------------------------|
| **Accent** | `#5BC0C4` | `--color-accent`        | Soft Teal   | CTAs, highlights               |
| Light      | `#7DD0D3` | `--color-accent-light`  | Light Teal  | Hover states                   |
| Dark       | `#4AA8AC` | `--color-accent-dark`   | Dark Teal   | Active states                  |
| Subtle     | `#D4F1F2` | `--color-accent-subtle` | Pale Teal   | Subtle backgrounds             |

## RGB Values (for rgba usage)

```css
/* Primary */
--rgb-ice-blue: 181, 216, 240;      /* #B5D8F0 */
--rgb-sky-blue: 103, 172, 224;      /* #67ACE0 */
--rgb-steel-blue: 58, 124, 168;     /* #3A7CA8 */
--rgb-deep-navy: 30, 75, 110;       /* #1E4B6E */

/* Accent */
--rgb-soft-teal: 91, 192, 196;      /* #5BC0C4 */
```

## Usage Guidelines

1. **Hero backgrounds**: Use `--color-primary-900` (#14354F) as base with gradient overlays
2. **CTAs/Buttons**: Use `--color-accent` (#5BC0C4) for primary actions
3. **Text on dark**: Use white or `--color-primary-100` for readability
4. **Borders/Accents**: Use `--color-primary-600` (Steel Blue) for definition
5. **Cards/Elevated**: Use white with `--color-primary-200` accents

## Deprecated Colors (DO NOT USE)

These old colors have been replaced:

| Old Hex   | Old Name      | Replace With                    |
|-----------|---------------|---------------------------------|
| `#011F4B` | Midnight Blue | `--color-primary-900` (#14354F) |
| `#015B77` | Old Teal      | `--color-primary-600` (#3A7CA8) |
| `#33D6B5` | Aqua Green    | `--color-accent` (#5BC0C4)      |
| `#B5F1E9` | Light Aqua    | `--color-accent-subtle`         |

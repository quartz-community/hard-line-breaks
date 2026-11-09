# @quartz-community/hard-line-breaks

> [!warning] Deprecated
> Line breaks are handled by [ObsidianFlavoredMarkdown](https://github.com/quartz-community/obsidian-flavored-markdown) 2.0+: a single line break renders as `<br>` by default (`preset: legacy`), as in Obsidian. Set its `strictLineBreaks` option to `true` for spaces instead. Remove this plugin (`npx quartz plugin remove hard-line-breaks`) unless your site doesn't use ObsidianFlavoredMarkdown; Quartz warns while it is enabled.

Converts single newlines in markdown to hard line breaks (like pressing Shift+Enter).

## Installation

```bash
npx quartz plugin add @quartz-community/hard-line-breaks
```

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: "@quartz-community/hard-line-breaks"
    enabled: true
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/HardLineBreaks) for more information.

## License

MIT

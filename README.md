# @quartz-community/hard-line-breaks

Converts single newlines in markdown to hard line breaks (like pressing Shift+Enter).

## Installation

```bash
npx quartz plugin add github:quartz-community/hard-line-breaks
```

## Usage

```ts
// quartz.config.ts
import * as ExternalPlugin from "./.quartz/plugins"

const config: QuartzConfig = {
  plugins: {
    transformers: [
      ExternalPlugin.HardLineBreaks(),
    ],
  },
}
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/) for more information.

## License

MIT

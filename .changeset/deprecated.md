---
"@quartz-community/hard-line-breaks": minor
---

Deprecated: ObsidianFlavoredMarkdown 2.0+ handles line breaks (a single line break renders as `<br>` by default, as in Obsidian; `strictLineBreaks: true` for spaces). The manifest declares `quartz.deprecated`, so Quartz 5.1+ warns when the plugin is enabled. It keeps working for sites without ObsidianFlavoredMarkdown.

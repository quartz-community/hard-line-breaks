# Changelog

## 1.1.0

### Minor Changes

- 995fdb9: Deprecated: ObsidianFlavoredMarkdown 2.0+ handles line breaks (a single line break renders as `<br>` by default, as in Obsidian; `strictLineBreaks: true` for spaces). The manifest declares `quartz.deprecated`, so Quartz 5.1+ warns when the plugin is enabled. It keeps working for sites without ObsidianFlavoredMarkdown.

## 1.0.0

### Major Changes

- Stable 1.0 release. All `@quartz-community/*` dependencies now use `^1.0.0` ranges.

  Pre-1.0 caret ranges pinned the minor version (`^0.2.1` means `>=0.2.1 <0.3.0`), so
  published fixes to shared packages could never be resolved by dependents. Moving the
  ecosystem to 1.0 makes caret ranges behave conventionally.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial Quartz community plugin template.

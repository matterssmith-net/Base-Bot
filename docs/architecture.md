# Base Bot Architecture

## Core flow
CLI → Container → Bootstrap → Services

## Rules
- No direct strings in core logic
- All logs go through logger
- All text goes through i18n
- No service access without container
- No business logic in CLI
# Bootstrap

Responsible for system initialization.

Flow:
1. Load config
2. Init logger
3. Validate environment
4. Init services

Rules:
- No business logic
- No direct output strings
- Only orchestration
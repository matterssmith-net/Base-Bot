# Logger

System logging layer.

Responsibilities:
- Structured logs
- Levels: info, warn, error, debug

Rules:
- No direct console.log in core
- All logs must go through logger
- No business logic inside logger



# GitHub Copilot instructions for this repository

Purpose
- This repository is a guided exercise for learning and using the GitHub Copilot CLI to create a Node.js CLI calculator app and to practice issue/workflow interactions.

Build, test, and lint commands
- No build/test/lint scripts were detected in this repository (no package.json present). There are no automated test or lint commands to run locally.
- For running the Copilot CLI exercises, follow the step content in .github/steps/*.md (see Step 1 for installing and using copilot).

High-level architecture (big picture)
- This is an educational/exercise repository rather than a production application. Main pieces:
  - .github/steps/: Markdown step content used by the exercise workflow to post instructions into an issue.
  - .github/workflows/: GitHub Actions that bootstrap the exercise (start-exercise and step workflows) and call the skills/exercise-toolkit actions.
  - .github/instructions/: Global instructions and shortcuts that the Copilot CLI and contributors should respect.
  - .github/ISSUE_TEMPLATE/feature_request.md: canonical template used by exercise prompts to create feature requests for the sample calculator app.
  - images/: screenshots used in the exercise content.
- The learning flow: the start workflow posts step content to an issue, the user works through .github/steps/* guided activities (often using the Copilot CLI) and may create issues or PRs using the feature_request template.

Key conventions and repository-specific patterns
- Exercise-first layout: lesson content and guidance live under .github/steps/ and .github/instructions/. Editing step files may affect the automated exercise flow.
- Issue-driven tasks: use .github/ISSUE_TEMPLATE/feature_request.md when creating issues related to the exercise (the step content expects this template).
- Copilot CLI expectations: the exercise assumes Node.js >= 22 and npm >= 10 and often instructs participants to install the standalone Copilot CLI globally (see .github/steps/1-step.md).
- Copilot CLI flags used in the exercise: `copilot --enable-all-github-mcp-tools` and `copilot --allow-all` are referenced in step content; sessions may prompt for folder trust and GH authentication (`!gh auth login`).
- Respect .github/instructions/*.instructions.md files: these files are consulted by Copilot sessions and contain useful global shortcuts and command references.

Where to look next
- Start with README.md and .github/steps/1-step.md for exercise setup and Copilot CLI usage.
- Inspect .github/workflows/* to understand how the exercise is posted and advanced.

Notes for future Copilot sessions
- This repo is a guided learning exercise; prefer referencing .github/steps/* when composing Copilot prompts that modify exercise content or issue creation steps.
- If adding real application code, include a package.json with scripts for build/test/lint so future sessions can detect and report commands automatically.

Files consulted: README.md, .github/steps/1-step.md, .github/instructions/copilot-cli-ref.instructions.md, .github/workflows/*.yml

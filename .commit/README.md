# Git custom cli

## Add .commit folder to &lt;project root folder&gt;

```sh
<project_root>/.commit
```

## Add command alias

```sh
alias cm="sh ./.commit/message.sh"
source ~/.zshrc
```

## Run command

```sh
cm
```

## Test

```sh
cd ./example && sh ./.commit/message.sh
```

## Example

```
What is your commit type?
1) feat:         4) style:       7) test:       10) chore:
2) fix:          5) refactor:    8) build:      11) revert:
3) docs:         6) perf:        9) ci:         12) [WIP]
Please enter your commit type (help): 1

Please enter your commit message
feat: Add a new feature

Please enter your commit summary
Summary: Added git custom cli for commit message format and guide markdown file

Please enter your commit details (E/end)
1) Added git custom cli
2) Added guide markdown file
3) E

Please enter the issue numbers you have resolved (#1, #2 ...)
Resolved: #1, #2

Please enter the hash value of the referenced commit (df33fc56, af33fc56 ...)
Referenced: df33fc56

Please enter the related PR numbers (#1, #2 ...)
Related: #22, #241

feat: Add a new feature

Summary:
Added git custom cli for commit message format and guide markdown file

1) Added git custom cli
2) Added guide markdown file

Resolved: #1, #2
Referenced: df33fc56
Related: #22, #241

[master b2e0329] feat: Add a new feature
 Committer: popomon <popomon@popomonui-MacBookPro.local>
```

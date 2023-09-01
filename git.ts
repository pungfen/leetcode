import { $ } from 'execa'

const fileName = await $`git diff --cached --name-only | tail -n 1`

fileName

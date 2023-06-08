#!/bin/bash

echo "$RESULT" > ./.commit/commit_message
COMMIT_MESSAGE=$(cat ./.commit/commit_message)
if  [[ -n "$COMMIT_MESSAGE" ]] ; then
    git commit -eF ./.commit/commit_message
fi
echo "" > ./.commit/commit_message

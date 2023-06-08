#!/bin/bash

echo "이번 커밋으로 해결된 이슈의 번호를 입력해주세요. (#1, #2 ...)"
read -ep "Resolved: " resolved_items
if  [[ -n "$resolved_items" ]] ; then
    RESULT="${RESULT}Resolved: ${resolved_items}\n"
fi

echo "이번 커밋과 관련이 있는 또다른 커밋의 아이디를 입력해주세요. (df33fc56, af33fc56 ...)"
read -ep "Referenced: " referenced_items
if  [[ -n "$referenced_items" ]] ; then
    RESULT="${RESULT}Referenced: ${referenced_items}\n"
fi

echo "이번 커밋과 관련이 있는 PR의 번호를 입력해 주세요. (#1, #2 ...)"
read -ep "Related: " related_items
if  [[ -n "$related_items" ]] ; then
    RESULT="${RESULT}Related: ${related_items}\n"
fi

# Footer - TEST
echo ""
echo "[COMMIT MESSAGE]"
echo ""
echo "${RESULT}"

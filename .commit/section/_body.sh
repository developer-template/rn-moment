#!/bin/bash

# Summary
echo "커밋의 내용을 요약해서 입력해주세요"
read -ep "Summary: " summary

# Summary - Result
RESULT="${RESULT}Summary:\n${summary}\n\n"

# Summary - TEST
# echo "$RESULT"

# Details
echo "커밋의 내용을 자세하게 입력 후, 'E' 또는 'end' 를 입력해 주세요 (E/end)"

# Details - Result
DETAILS=""
declare -i INDEX=1
while :
do
    read -ep "$INDEX) " details
    case $details in
        "E"|"end")
            break
            ;;
        *)
            DETAILS="${DETAILS}${INDEX}) ${details}\n"
            ;;
    esac
    INDEX=$(( $INDEX + 1 ))
done
RESULT="${RESULT}${DETAILS}\n"

# Details - TEST
# echo "DETAILS TEST"
# echo "${RESULT}"


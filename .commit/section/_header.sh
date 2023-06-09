#!/bin/bash

echo "어떤 종류의 커밋인가요?"
PS3='커밋의 종류에 따라 해당하는 번호를 입력해 주세요 (help):'
options=(
  "feat: "
  "fix: "
  "docs: "
  "style: "
  "refactor: "
  "perf: "
  "test: "
  "build: "
  "ci: "
  "chore: "
  "revert: "
  "[WIP] "
)

select opt in "${options[@]}"
do
    case $opt in
        "feat: "|"fix: "|"docs: "|"style: "|"refactor: "|"perf: "|"test: "|"build: "|"ci: "|"chore: "|"revert: "|"[WIP] ")
            # echo "$opt"
            break
            ;;
        *) 
            # echo "invalid option $REPLY"
            echo "--------------------------------------------------------------------------------------------------------------------"
            echo "*  1) feat     : 새로운 기능을 구현했습니다."
            echo "*  2) fix      : 버그를 고쳤습니다."
            echo "*  3) docs     : 문서를 수정했습니다."
            echo "*  4) style    : 코드에 영향을 주지 않는 내용을 수정했습니다. (코드 포맷, 세미콜론 ...)"
            echo "*  5) refactor : 버그를 수정하거나 새로운 기능을 구현하지 않고 코드를 수정했습니다."
            echo "*  6) perf     : 성능을 향상시켰습니다."
            echo "*  7) test     : 누락된 테스트 코드를 추가하거나 기존 테스트 코드를 수정했습니다."
            echo "*  8) build    : 빌드 시스템 또는 외부 라이브러리에 대한 내용을 수정했습니다. (example scopes: gulp, broccoli, npm)"
            echo "*  9) ci       : 지속적인 통합를 위한 파이프라인 설정파일을 수정하거나 스크립트를 수정했습니다. (example scopes: Travis, Circle CI)"
            echo "* 10) chore    : src, test 파일이 아닌 다른 파일을 수정했습니다."
            echo "* 11) revert   : 이전 커밋을 되돌렸습니다."
            echo "* 12) [WIP]    : 진행중인 작업입니다."
            echo "--------------------------------------------------------------------------------------------------------------------"
            ;;
    esac
done

echo "커밋 메시지를 입력해주세요."
read -ep "$opt" message
RESULT="$opt$message\n\n"

# TEST
# echo "$opt$message"
# echo "RESULT :: $RESULT"
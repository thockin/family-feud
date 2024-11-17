#!/bin/sh

echo '{'
echo '  "settings": {},'
echo '  "rounds": ['
cat 3 | while read X; do
    echo '{'
    echo -n '  "question": "'
    echo -n "$X" | sed 's/   *.*//'
    echo '",'
    echo '  "answers": ['
    echo "$X" | sed 's/   */\n/g' | tail -n +2 | while read Y; do
        echo '    {'
        ANS=$(echo "$Y" | sed -e 's/^[0-9][0-9]* *//' -e 's/ *$//')
        echo "      \"ans\": \"$ANS\","
        PNT=$(echo "$Y" | cut -f1 -d' ')
        echo '      "pnt": ' $PNT
        echo '    },'
    done
    echo '  ],'
    echo '"multiply": 1'
    echo '},'
done
echo '  ]'
echo '}'

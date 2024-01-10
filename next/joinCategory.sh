#!/bin/bash

filename="$1/*.json"

joined="$1/all-$1"

touch "$joined"

echo "[" >> "$joined"

count=7;


for file in $filename
do
 count=$count-1
 cat "$file" >> "$joined"
 if((count > -1))
 then
    echo "," >> "$joined"
    continue  # skip this step
else
    break; # terminate 'for'
fi
done

# add vocabularies
vocabularies="$1/vocabularies/${1}01.json";

echo "$vocabularies"
echo "Press any key to print joined file"
read -r

echo ",\"sec-vocab\":"
cat "$vocabularies" >> "$joined"


# add ']'
echo ']' >> "$joined"

echo #### DONE #### 
echo "Press any key to print joined file"
read -r 
echo "content of \"$joined\" : "
echo "------------------------------------------"
cat "$joined"

echo "press any key to exit"
read -r

echo
exit 0;

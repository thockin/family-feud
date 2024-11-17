for i in `seq 1 26`; do echo $i; cat responses.tsv | awk -F'\t' "{ if (\$$i != \"\") {print \$$i;} }" >${i}.new.txt; wc -l ${i}.new.txt; done

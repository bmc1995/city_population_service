while IFS=$'\t' read -r city state population; do
    redis-cli -d $'\t' SET "${state,,}-${city,,}" "${population}"
done < city_populations.tsv
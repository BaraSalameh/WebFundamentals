select countries.name, languages.language, languages.percentage FROM countries
join languages  on  countries.id = languages.country_id
where languages.language like "%Slovene"
order by languages.percentage DESC
SELECT languages.language , countries.name , languages.percentage from languages
join countries on countries.id = languages.country_id
where languages.percentage > 89
order by languages.percentage DESC
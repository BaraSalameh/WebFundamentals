SELECT cities.name,cities.population from cities
join countries on cities.country_id = countries.id
where cities.population > 500000 and countries.name like "%Mexico"
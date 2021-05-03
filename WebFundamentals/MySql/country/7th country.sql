select countries.name, cities.name, cities.district, cities.population from countries
join cities on countries.id=cities.country_id
where countries.name like"%Argentina" and cities.district like"%Buenos Aires%" and cities.population>500000
select countries.name , count(cities.name) as citiesnumber from countries
join cities on cities.country_id=countries.id
group by countries.name 
order by citiesnumber DESC
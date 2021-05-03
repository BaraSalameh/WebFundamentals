select countries.region, count(countries.name) as countriesnum from countries
group by countries.region
order by countriesnum desc
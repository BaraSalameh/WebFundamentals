select countries.name, countries.government_form, countries.capital, countries.life_expectancy from countries
where countries.government_form like "%Constitutional Monarchy%" and countries.capital>200 and countries.life_expectancy>75

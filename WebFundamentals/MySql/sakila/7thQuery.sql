select title, description, release_year, rating, special_features, category.name from film 
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
where category.name like "%DRAMA"  and film.rental_rate = 2.99 
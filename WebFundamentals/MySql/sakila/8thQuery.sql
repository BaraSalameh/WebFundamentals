select title, description, release_year, rating, special_features,category.name,actor.first_name,actor.last_name from film
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
join film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where actor.first_name like "%SANDRA" and actor.last_name like "%KILMER" and category.name like "%ACTION"

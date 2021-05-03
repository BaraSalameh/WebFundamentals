select title, description, release_year as "release year", rating,special_features as "special features" from film 
join film_actor on film.film_id = film_actor.film_id
where film_actor.actor_id = 15 and rating = 'G' and special_features like "behind%"
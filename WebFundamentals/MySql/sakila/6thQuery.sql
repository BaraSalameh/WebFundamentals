select film_actor.film_id,title,film_actor.actor_id,concat(first_name," ",last_name) as "name" from film 
join  film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where film_actor.film_id = 369
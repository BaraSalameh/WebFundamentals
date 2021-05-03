select film_actor.actor_id,concat(first_name," ",last_name) as name,title, description,release_year from actor
join film_actor on actor.actor_id = film_actor.actor_id
join film on film.film_id = film_actor.film_id
where actor.actor_id = 5;
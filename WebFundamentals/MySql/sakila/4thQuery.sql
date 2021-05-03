select first_name,last_name, email,address from customer 
join address on customer.address_id = address.address_id
join city on city.city_id = address.city_id
join store on store.store_id = customer.store_id
where store.store_id = 1 and city.city_id IN (1,42,312,459)
select first_name,last_name,email,address from customer
join address on customer.address_id = address.address_id
join city on city.city_id = address.city_id
where city.city_id = 312
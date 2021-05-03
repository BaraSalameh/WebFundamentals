select concat(friends.first_name,' ',friends.last_name) as Eli_friends from users
join friendships on friendships.user_id = users.id
join users as friends on friends.id = friendships.friend_id
where users.first_name like "Eli%"
order by friends.first_name;
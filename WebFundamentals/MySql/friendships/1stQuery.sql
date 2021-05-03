select concat(users.first_name,'  ',users.last_name) as 'Full name' from users
join friendships on users.id = friendships.user_id
join users as friend on friend.id = friendships.friend_id
where friend.first_name like "Kermit%";
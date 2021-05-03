select count(users.id) as friendships from users
join friendships on users.id = friendships.user_id
join users as friends on friends.id = friendships.friend_id;
select users.first_name,count(users.id) as number_of_friends from users
join friendships on users.id = friendships.user_id
join users as friends on friends.id = friendships.friend_id
group by users.id
order by number_of_friends desc
limit 1
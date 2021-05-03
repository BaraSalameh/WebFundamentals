insert into friendships(id,user_id,friend_id)
values(5,2,5);

select users.first_name,users.last_name,friends.first_name,friends.last_name from users
join friendships on users.id = friendships.user_id
join users as friends on friends.id = friendships.friend_id
where users.first_name like "Eli%" and friends.first_name like "Marky%";
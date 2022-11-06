import pool from "./../index.js";

// onclick of add friend button this will be triggred
export const addFriend = async (req, res) => {
  try {
    const values = [req.user.user_id, req.params.friend_id];
    const values1 = [req.params.friend_id, req.user.user_id];
    await pool.query("INSERT INTO friends VALUES($1,$2)", values);
    await pool.query("INSERT INTO friends VALUES($1,$2)", values1);
    return res.status(200).send({ message: "Added to friends..." });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Failed to add to friends...", err });
  }
};

//on page load this will send list of friends
export const getFriends = async (req, res) => {
  try {
    const values = [req.user.user_id];
    const friends = await pool.query(
      "SELECT * FROM user_info u, friends f where (u.user_id = f.friend_id) and f.user_id = $1",
      values
    );
    friends.rows.map((ele) => {
      delete ele.password;
      return ele;
    });

    return res.status(200).send({ friends: friends.rows });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Failed to get friends", err });
  }
};

export const searchFriends = async (req, res) => {
  try {
    const value = [req.params.key + "%"];

    const friends = await pool.query(
      "select * from user_info where name like $1",
      value
    );
    friends.rows.map((ele) => {
      delete ele.password;
      return ele;
    });
    return res.status(200).send({ friends: friends.rows });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Failed to get friends", err });
  }
};

// get a list of suggestions for friends
export const getFriendSuggestions = async (req, res) => {
  try {
    const values = [req.user.user_id];
    console.log(values);
    const friends = await pool.query(
      `
    select *
    from user_info
    where user_id in
    (select distinct user_id
    from favourites
    where song_id in (
    select distinct  song_id
    from favourites
    where user_id=$1
    ) and user_id<>$1)
    FETCH FIRST 5 ROWS ONLY;`,
      values
    );
    const friends2 = await pool.query(
      `
      select * 
      from user_info
      where user_id in (select distinct friend_id
      from friends
      where user_id in (select distinct friend_id
      from friends
      where user_id=$1) and friend_id<>$1)
      FETCH FIRST 5 ROWS ONLY;`,
      values
    );

    const response = [...friends.rows, ...friends2.rows];

    console.log("friends",response);

    res.status(200).send({ message: "Loaded Suggestions", friends: response });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "Failed to get friend suggestions", err });
  }
};

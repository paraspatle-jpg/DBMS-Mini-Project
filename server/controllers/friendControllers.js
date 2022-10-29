import pool from "./../index.js";

// onclick of add friend button this will be triggred
export const addFriend = async (req, res) => {
  try {
    const values = [req.user.user_id, req.params];
    await pool.query("INSERT INTO friends VALUES($1,$2)", values);
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
    const values = [req.body.user_id];
    const friends = await pool.query(
      "SELECT * FROM user_info WHERE user_id IN (SELECT friend_id FROM friends WHERE user_id=$1)",
      values
    );
    friends.rows.map((ele) => {
      delete ele.password;
      return ele;
    });

    return res.status(200).send({ friends });
  } catch (err) {
    return res.status(500).send({ message: "Failed to get friends", err });
  }
};

// get a list of suggestions for friends
export const getFriendSuggestions = async (req, res) => {
  try {
    const values = [req.user.user_id];
    const friends = await pool.query(
      "SELECT * FROM friends WHERE "
    )

  } catch (err) {
    return res.status(500).send({ message: "Failed to get friend suggestions", err });
  }
};

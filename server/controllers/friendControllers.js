import pool from "./../index.js";

// onclick of add friend button this will be triggred
export const addFriend = async (req, res) => {
  try {
    const user = req.user;
  } catch (err) {}
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
  } catch (err) {}
};

// get a list of suggestions for friends
export const getFriendSuggestions = async (req, res) => {
  try {
  } catch (err) {}
};

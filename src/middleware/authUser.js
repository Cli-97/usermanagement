const client = require('../../config/db.js')

const authorizeUser = (req, res) => {

  return async (req, res, next) => {
    
  let user = req.user
  //return console.log(user);
    try {
      // Extract user_id from req.user or set it to null if not present
      const user_id  = user.user_id
      // Fetch user roles from the database using user_id
      const result = await client.query(
        'SELECT role_id FROM users WHERE user_id = $1',
        [user_id]
      );

      const roles = await client.query(
        'SELECT role_id FROM roles WHERE role_name = $1',
        ['admin']
      );      

      // Extract role_ids from the database result
      const userRoleIds = result.rows.map((row) => row.role_id);
      const adminRoleIds = roles.rows.map((row) => row.role_id);
      //const userRoleIds = result.rows.map((row) => row.roles);
      console.log('User Roles:', userRoleIds);
      console.log('Required Roles:', adminRoleIds);

      // Check if the user has the required role_id
      const hasRequiredRole = userRoleIds.some((roleId) =>
      adminRoleIds.includes(roleId)
    );
      //const hasRequiredRole = userRoleIds.some((roleId) => req.user.role_id.includes(roleId));

      if (hasRequiredRole) {
        // User has the required role, proceed to the next middleware
        next();
      } else {
        // User doesn't have the required role, send a 403 Forbidden response
        res.status(403).json({ message: 'Unauthorized.' });
      }
    } catch (error) {
      // Handle database query error
      console.error('Error checking user roles:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};

module.exports = { authorizeUser };

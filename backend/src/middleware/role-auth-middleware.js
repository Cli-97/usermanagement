// authMiddleware.js

/*const checkRole = (requiredRole) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Assuming user information is stored in the request
      if (userRole === requiredRole) {
        next();
      } else {
        res.status(403).json({ error: 'Forbidden' });
      }
    };
  };
  
  module.exports = { checkRole };*/
  const authPage = (Permissions) => {
    return(req, res, next) => {
        const userRole = req.body.role_id
        if(Permissions.includes(userRole)){
            next();
        }else{
            return res.status(404).json("You dont have permissions to run this page")
        }
    }

};

// authMiddleware.js
const authRoles = (allowedRoles) => {
  return (req, res, next) => {
    // Your authorization logic here based on allowedRoles and req.user.role
    const userRoles = req.user ? req.user.role_id : [];

    const isAuthorized = allowedRoles.some((role_id) => userRoles.includes(role_id));

    if (isAuthorized) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  };
};


module.exports = {authPage, authRoles}
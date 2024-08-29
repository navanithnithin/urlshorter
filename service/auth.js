const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "nithin@123!"

// restless
function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secret);
}

function getUser(token) {
    if (!token) return null;
    // return sessionIdToUserMap.get(id);
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
    

}

// restfull

// function setUser(id, user) {
//     sessionIdToUserMap.set(id, user);
// }
// function getUser(id) {
//     return sessionIdToUserMap.get(id)
// }

module.exports = {
    setUser, getUser
}
import jwt from "jsonwebtoken";
import { JWT_TOKEN_SECRET } from "./config.js";
export const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(header, JWT_TOKEN_SECRET);
    if (decoded) {
        req.userId = decoded.userId;
        next();
    }
    else {
        return res.status(403).json({ message: "You are not logged in" });
    }
};
//# sourceMappingURL=middleware.js.map
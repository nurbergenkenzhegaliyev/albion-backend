import ApiError from "../exceptions/api-error.js";
import tokenService from "../service/token-service.js";

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData.status.includes('admin')) {
      return next(ApiError.AdminError());
    }

    req.user = userData;
    next();
  } catch (error) {
    console.log(error);
    return next(ApiError.UnauthorizedError());
  }
}

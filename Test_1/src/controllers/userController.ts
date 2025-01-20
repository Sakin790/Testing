import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";

class userController {
  static status = asyncHandler(async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  });
}

export { userController };

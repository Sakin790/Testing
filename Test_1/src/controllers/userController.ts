import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";

class userController {
  static status = asyncHandler(async (req: Request, res: Response) => {
    try {
      return res.json(new ApiResponse(200, {}, "Inventory Status Perfect"));
    } catch (error) {
      return res
        .status(500)
        .json(
          new ApiError(
            500,
            "Something went wrong when trying to load the inventory Status"
          )
        );
    }
  });
}

export { userController };

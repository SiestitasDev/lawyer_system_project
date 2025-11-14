import { profileService } from "../services/profileService.js"; 
import { BadRequestError } from "../errors/errors.js";

export const getMyProfile = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new BadRequestError("Usuario no autenticado.");
  }

  const profile = await profileService.getProfileByUserId(userId);
  res.json({
    success: true,
    data: profile,
  });
};

export const updateMyProfile = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new BadRequestError("Usuario no autenticado.");
  }

  const updatedProfile = await profileService.updateProfile(userId, req.body);
  res.json({
    success: true,
    data: updatedProfile,
  });
};

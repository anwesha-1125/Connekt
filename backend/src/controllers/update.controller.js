import  User  from "../models/user.js";

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    const {
      fullName,
      bio,
      location,
      nativeLanguage,
      learningLanguage,
      profilePic,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        fullName,
        bio,
        location,
        nativeLanguage,
        learningLanguage,
        profilePic,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log("Error updating profile:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};
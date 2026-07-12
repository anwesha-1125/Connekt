import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {
  LoaderIcon,
  MapPinIcon,
  ShipWheelIcon,
  ShuffleIcon,
  CameraIcon,
} from "lucide-react";

import useAuthUser from "../hooks/useAuthUser";
import { LANGUAGES } from "../constants";
import { axiosInstance } from "../lib/axios";

const ProfilePage = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: "",
    bio: "",
    nativeLanguage: "",
    learningLanguage: "",
    location: "",
    profilePic: "",
  });

  useEffect(() => {
    if (authUser) {
      setFormState({
        fullName: authUser.fullName || "",
        bio: authUser.bio || "",
        nativeLanguage: authUser.nativeLanguage || "",
        learningLanguage: authUser.learningLanguage || "",
        location: authUser.location || "",
        profilePic: authUser.profilePic || "",
      });
    }
  }, [authUser]);

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.put("/update/profile", data);
      return res.data;
    },

    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({
        queryKey: ["authUser"],
      });
    },

    onError: (err) => {
      toast.error(err.response?.data?.message || "Failed to update profile");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1;

    setFormState({
      ...formState,
      profilePic: `https://avatarapi.runflare.run/public/${idx}.png`,
    });

    toast.success("Random avatar generated!");
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-3xl shadow-xl">

        <div className="card-body p-6 sm:p-8">

          <h1 className="text-3xl font-bold text-center mb-6">
            Edit Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Avatar */}

            <div className="flex flex-col items-center justify-center space-y-4">

              <div className="size-32 rounded-full bg-base-300 overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2">

                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 opacity-40" />
                  </div>
                )}

              </div>

              <button
                type="button"
                onClick={handleRandomAvatar}
                className="btn btn-accent"
              >
                <ShuffleIcon className="size-4 mr-2" />
                Generate Random Avatar
              </button>

            </div>

            {/* Full Name */}

            <div className="form-control">

              <label className="label">

                <span className="label-text">
                  Full Name
                </span>

              </label>

              <input
                type="text"
                className="input input-bordered"
                value={formState.fullName}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    fullName: e.target.value,
                  })
                }
              />

            </div>

            {/* Bio */}

            <div className="form-control">

              <label className="label">

                <span className="label-text">
                  Bio
                </span>

              </label>

              <textarea
                className="textarea textarea-bordered h-24"
                value={formState.bio}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    bio: e.target.value,
                  })
                }
              />

            </div>

            {/* Languages */}

            <div className="grid md:grid-cols-2 gap-4">

              <div className="form-control">

                <label className="label">

                  <span className="label-text">
                    Native Language
                  </span>

                </label>

                <select
                  className="select select-bordered"
                  value={formState.nativeLanguage}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      nativeLanguage: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>

                  {LANGUAGES.map((lang) => (
                    <option
                      key={lang}
                      value={lang.toLowerCase()}
                    >
                      {lang}
                    </option>
                  ))}
                </select>

              </div>

              <div className="form-control">

                <label className="label">

                  <span className="label-text">
                    Learning Language
                  </span>

                </label>

                <select
                  className="select select-bordered"
                  value={formState.learningLanguage}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      learningLanguage: e.target.value,
                    })
                  }
                >
                  <option value="">Select</option>

                  {LANGUAGES.map((lang) => (
                    <option
                      key={lang}
                      value={lang.toLowerCase()}
                    >
                      {lang}
                    </option>
                  ))}
                </select>

              </div>

            </div>

            {/* Location */}

            <div className="form-control">

              <label className="label">

                <span className="label-text">
                  Location
                </span>

              </label>

              <div className="relative">

                <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 opacity-70" />

                <input
                  type="text"
                  className="input input-bordered w-full pl-10"
                  value={formState.location}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      location: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <button
              className="btn btn-primary w-full"
              disabled={isPending}
            >
              {!isPending ? (
                <>
                  <ShipWheelIcon className="size-5 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <LoaderIcon className="animate-spin size-5 mr-2" />
                  Saving...
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
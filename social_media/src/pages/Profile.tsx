import { useEffect, useState } from "react";
import { usersService } from "../services/usersService";
import type { User } from "../interfaces/user";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faMapMarkerAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { getProfileImage } from "../shared/images";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await usersService.getCurrentUser();
        setUser(data);
      } catch (err: any) {
        setError(err.message || "Error fetching user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
          <div className="animate-pulse">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 flex justify-center">
        <div className="bg-red-50 border border-red-400 text-red-700 shadow-lg rounded-2xl p-6 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
          <p className="text-gray-500 italic">No user found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-10 mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-200 relative">
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src={getProfileImage(user.id)}
            alt={user.name}
            className="w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>

      <div className="pt-16 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {user.name}
        </h2>
        <p className="text-gray-500">@{user.username}</p>

        <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm">
          <p className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange-500 w-5"
            />
            <span>{user.email}</span>
          </p>
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-green-500 w-5" />
            <span>{user.phone}</span>
          </p>
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faGlobe} className="text-blue-500 w-5" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-500 w-5"
            />
            <span>
              {user.address.street}, {user.address.city} ({user.address.zipcode}
              )
            </span>
          </p>
          <p className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-purple-500 w-5"
            />
            <span>
              {user.company.name} – {user.company.catchPhrase}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

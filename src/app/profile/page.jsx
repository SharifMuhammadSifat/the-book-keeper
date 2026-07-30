import Image from "next/image";
import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-8">
        <div className="flex flex-col items-center">
          <Image
            src={user.image}
            alt={user.name}
            width={180}
            height={180}
            className="rounded-full object-cover border-4 border-amber-500"
          />

          <h1 className="mt-6 text-3xl font-bold text-gray-800">
            {user.name}
          </h1>

          <div className="mt-8 flex w-full flex-col gap-4">
            <button className="w-full rounded-lg bg-amber-500 py-3 text-white font-semibold transition hover:bg-amber-600">
              Update Name
            </button>

            <button className="w-full rounded-lg bg-amber-800 py-3 text-white font-semibold transition hover:bg-amber-900">
              Update Picture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
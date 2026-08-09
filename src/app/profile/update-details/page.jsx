import react from "react";

const updateName = () => {
    return (
        <div className="flex m-auto justify-center items-center gap-4">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Update name</legend>
                <div className="join">
                    <input type="text" className="input join-item" placeholder="New name" />
                    <button className="btn join-item bg-linear-to-r from-red-500 to-amber-900 text-white">save</button>
                </div>
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Update image</legend>
                <div className="join">
                    <input type="url" className="input join-item" placeholder="New image url" />
                    <button className="btn join-item bg-linear-to-r from-red-500 to-amber-900 text-white cursor-pointer">save</button>
                </div>
            </fieldset>
        </div>
    );
};

export default updateName;
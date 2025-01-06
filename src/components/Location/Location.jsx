import { FaLocationDot } from "react-icons/fa6";

export default function Location({ location }) {
  return (
    <>
      {location && (
        <div className="flex justify-center gap-2 text-lg">
          <p className="flex items-center justify-center gap-2 text-gray-600 font-bold mt-4">
            <FaLocationDot size={30} className="text-gray-600" />
            Location: {location}
          </p>
        </div>
      )}
    </>
  );
}

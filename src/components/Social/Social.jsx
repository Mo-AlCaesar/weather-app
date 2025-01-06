import { FaFacebook, FaGithub, FaLink } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <a
        href="https://github.com/Mo-AlCaesar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} className="text-gray-800 hover:text-gray-600" />
      </a>
      <a
        href="https://facebook.com/mohamedabdallahofficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} className="text-blue-600 hover:text-blue-500" />
      </a>
      <a
        href="https://your-repo-link.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLink size={30} className="text-green-500 hover:text-green-400" />
      </a>
    </div>
  );
}

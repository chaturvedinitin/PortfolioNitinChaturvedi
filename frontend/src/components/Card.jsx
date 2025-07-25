import { FiGlobe, FiGithub, FiArrowRight } from 'react-icons/fi';

const Card = ({ project }) => {
  const { image, title, liveUrl, githubUrl, description, technologies, status, detailsUrl } = project;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Project Image */}
      <img
        src={image}
        alt={`${title} project screenshot`}
        className="w-full h-48 object-cover"
      />

      {/* Project Details */}
      <div className="p-5 space-y-4">
        {/* Header: Title and Links */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex space-x-3 text-gray-600">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="hover:text-blue-600"
              >
                <FiGlobe className="text-xl" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code`}
                className="hover:text-black"
              >
                <FiGithub className="text-xl" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>

        {/* Technologies */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((TechIcon, index) => (
              <div key={index} className="text-xl text-blue-500">
                <TechIcon />
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Status and View Details */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
            <span>{status}</span>
          </div>
          <a
            href={detailsUrl}
            className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline"
          >
            View Details <FiArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

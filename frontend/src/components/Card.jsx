import { FiGlobe, FiGithub, FiArrowRight } from 'react-icons/fi';

const Card = ({ project }) => {
  const { image, title, liveUrl, githubUrl, description, technologies, status, detailsUrl } = project;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-zinc-300 max-w-md w-full">
      {/* Project Image */}
      <img
        src={image}
        alt={`${title} project screenshot`}
        className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover hover:scale-105 transform duration-500 ease-in-out"
      />


      <div className="flex flex-col justify-around p-4 space-y-4">

        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex space-x-3 text-gray-600">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="hover:text-black"
              >
                <FiGlobe className="text-lg md:text-xl" />
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
                <FiGithub className="text-lg md:text-xl" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div>
          <p className="text-sm md:text-base font-medium text-gray-700 mb-1">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((TechIcon, index) => (
              <div key={index} className="text-base md:text-lg text-teal-800">
                <TechIcon />
              </div>
            ))}
          </div>
        </div>


        <div className="flex items-center justify-between pt-2 border-t border-gray-200 mt-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
            <span>{status}</span>
          </div>
          <a
            href={detailsUrl}
            className="text-xs md:text-sm text-zinc-800 font-medium flex items-center gap-1 hover:underline"
          >
            View Details <FiArrowRight className="text-xs md:text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

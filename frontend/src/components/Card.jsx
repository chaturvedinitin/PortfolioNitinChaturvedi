import { FiGlobe, FiGithub, FiArrowRight } from 'react-icons/fi';

const Card = ({ project }) => {
  const {
    image,
    title,
    liveUrl,
    githubUrl,
    description,
    technologies,
    status,
    detailsUrl,
  } = project;

  return (
    <div className="bg-white flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md border border-zinc-400 transition-all duration-300 ease-in-out group hover:scale-[1.015] w-full mx-auto h-full">

      {/* Body */}
      <div className="flex flex-col px-4 py-3 flex-grow bg-zinc-900 text-zinc-400">
        {/* Title & Links */}
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold text-zinc-400 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-zinc-500">
            {liveUrl && (
              <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800"
              >
                <FiGlobe className="text-[16px]" />
              </a>
            )}
            {githubUrl && (
              <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800"
              >
                <FiGithub className="text-[16px]" />
              </a>
            )}
          </div>
        </div>


        <p className="text-xs text-zinc-600 leading-snug line-clamp-3 mt-2 mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.map((TechIcon, index) => (
            <div
            key={index}
            className="text-sm text-zinc-900 bg-zinc-600 hover:bg-zinc-200 transition px-2 py-[2px] rounded"
            >
                React
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;







{/* Image */}
{/* <div className="w-full aspect-video overflow-hidden rounded-t-xl relative">
  <img
    src={image}
    alt={`${title} project screenshot`}
    className="w-full h-1/2 object-fill transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
  />
  <span
    className={`absolute top-2 right-2 text-[10px] px-2 py-[2px] rounded-full font-medium shadow-sm backdrop-blur-sm ${
      status === 'Live'
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-600'
    }`}
  >
    {status}
  </span>
</div> */}
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
    <div className="bg-white flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md border border-zinc-200 transition-all duration-300 ease-in-out group hover:scale-[1.015] w-full max-w-sm mx-auto h-full">
      {/* Image */}
      <div className="w-full aspect-video overflow-hidden rounded-t-xl relative">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
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
      </div>

      {/* Body */}
      <div className="flex flex-col px-4 py-3 flex-grow">
        {/* Title & Links */}
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold text-zinc-800 line-clamp-1">
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

        {/* Description */}
        <p className="text-xs text-zinc-600 leading-snug line-clamp-3 mt-2 mb-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.map((TechIcon, index) => (
            <div
              key={index}
              className="text-sm text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition px-2 py-[2px] rounded"
            >
              <TechIcon />
            </div>
          ))}
        </div>

        {/* Spacer pushes bottom row down */}
        <div className="flex-grow" />

        {/* Footer */}
        <div className="h-px bg-zinc-200 my-2" />
        <div className="flex items-center justify-between pt-1">
          <a
            href={detailsUrl}
            className="text-xs font-medium text-zinc-700 hover:underline flex items-center gap-1"
          >
            Details <FiArrowRight className="text-[11px]" />
          </a>
          <span className="text-[10px] text-zinc-400 hidden group-hover:inline transition-opacity">
            Hover enabled
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

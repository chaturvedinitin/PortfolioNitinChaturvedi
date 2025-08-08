import { FiGlobe, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Card = ({ project }) => {
  const {
    title,
    liveUrl,
    githubUrl,
    description,
    technologies = [],
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="p-4 bg-white/3 text-gray-400 flex flex-col justify-between rounded-xl shadow-md border border-zinc-700 w-full h-full overflow-hidden"
    >
      <div className="flex flex-col px-5 py-4 flex-grow gap-2">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-zinc-100 line-clamp-1 tracking-tighter">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live project link"
                className="text-zinc-400 hover:text-green-400 transition-colors mx-1"
              >
                <FiGlobe className="text-lg" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="text-zinc-400 hover:text-indigo-400 transition-colors mx-1"
              >
                <FiGithub className="text-lg" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-zinc-200 leading-snug line-clamp-3 mt-2 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="text-xs font-medium bg-gray-800 text-gray-400 px-2 py-1 rounded hover:bg-zinc-700 hover:text-white transition"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
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
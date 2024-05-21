import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ imageSrc, altText, title, description, link }) => {
  return (
    <div className="relative h-[400px] w-5/6 mx-auto">
      <Image src={imageSrc} alt={altText} width={400} height={400} className="h-full rounded-md" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

import Image from 'next/image';
import Link from 'next/link';
const moreWorkProjects = [
  {
    title: 'ashfinn.github.io',
    imageUrl: '/ashfinn-github-io.png',
    link: 'https://ashfinn.github.io/',
  },
  {
    title: 'the-code-forum',
    imageUrl: '/code-forum.png',
    link: 'https://the-code-forum.github.io/website/',
  },
  {
    title: 'HelpBot',
    imageUrl: '/helpbot-public.png',
    link: 'https://help-bot-beta.vercel.app/',
  },
  {
    title: 'Matlab-Hero',
    imageUrl: '/matlab-hero.png',
    link: 'https://matlab-hero.vercel.app/',
  },
  {
    title: 'Cardify Studio',
    imageUrl: '/cardify-studio.png',
    link: 'https://cardify-ashfin.vercel.app/',
  },
  {
    title: 'Pixel-Craft',
    imageUrl: '/pixel-craft.png',
    link: 'https://ashfinn.github.io/Pixel-Craft/',
  }
];

// "More Work" Section
export const MoreWork = () => (
  <section className="container mx-auto px-4 py-16 sm:py-24">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12">More Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {moreWorkProjects.map((project) => (
        <SmallProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

// Card for the "More Work" grid
export const SmallProjectCard = ({ title, imageUrl, link }) => (
  <Link href={link} className="block group">
    <article className="transition-transform duration-300 ease-in-out group-hover:scale-105">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm">
        <Image
          src={imageUrl}
          alt={`${title} project preview`}
          width={500}
          height={400}
          layout="responsive"
          className="object-cover"
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700">{title}</h3>
    </article>
  </Link>
);
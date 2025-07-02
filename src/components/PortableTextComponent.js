import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../sanity/lib/image'; 

const PortableTextComponent = ({ value }) => {
  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-5 flex items-center justify-center h-[35vw] tablet:w-full tablet:h-auto">
          {value?.asset && (
            <Image
              src={urlFor(value).url()}
              alt={value.alt || ' '}
              width={800}
              height={1000}
              className="rounded-lg"
            />
          )}
        </div>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {children}
        </a>
      ),
    },
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-[2vw] font-medium my-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-medium my-2">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl font-medium my-2">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc ml-5 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal ml-5 space-y-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
      number: ({ children }) => <li className="mb-1">{children}</li>,
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextComponent;
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Layout from '@/components/Layout';
import { projectFilePaths, PROJECTS_PATH } from '../../utils/mdxUtils';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
// const components = {
//   a: CustomLink,
//   // It also works with dynamically-imported components, which is especially
//   // useful for conditionally loading components for certain routes.
//   // See the notes in README.md for more details.
//   InlineLine: dynamic(() => import('@/components/InlineLine')),
//   Head,s
// };

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <div className="flex flex-col items-center h-full ">
        <div className="container prose md:prose-lg prose-red lg:prose-xl ">
          <div className="text-center post-header">
            <h2>{frontMatter.title}</h2>
            {frontMatter.description && (
              <p className="font-light description">
                {frontMatter.description}
              </p>
            )}
          </div>
          <main className="flex flex-col items-center">
            <div className="w-11/12">
              <MDXRemote {...source} />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const projectFilePaths = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(projectFilePaths);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = () => {
  const paths = projectFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

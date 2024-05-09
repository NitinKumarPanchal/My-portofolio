import config from "@config/config.json";
import Base from "@layouts/Baseof";
import InnerPagination from "@layouts/components/InnerPagination";
import dateFormat from "@lib/utils/dateFormat";
import { markdownify } from "@lib/utils/textConverter";
import { DiscussionEmbed } from "disqus-react";
import { MDXRemote } from "next-mdx-remote";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
import Post from "./partials/Post";
import Sidebar from "./partials/Sidebar";
import shortcodes from "./shortcodes/all";
const { disqus } = config;
const { meta_author } = config.metadata;

const PostSingle = ({
  frontmatter,
  content,
  mdxContent,
  slug,
  posts,
  allCategories,
  relatedPosts,
}) => {
  let { description, title, date, image, categories } = frontmatter;
  description = description ? description : content.slice(0, 120);

  const { theme } = useTheme();
  const author = frontmatter.author ? frontmatter.author : meta_author;
  // Local copy so we don't modify global config.
  let disqusConfig = config.disqus.settings;
  disqusConfig.identifier = frontmatter.disqusId
    ? frontmatter.disqusId
    : config.settings.blog_folder + "/" + slug;

  return (
    <Base title={title} description={description}>
      <section className="section single-blog">
        <div className="container">
          <div className="row">
            <h1 class="lg:text-[42px] mb-10">This is the cloned BOAT LIFE STYLE project using MEAN stack</h1>
            <video autoPlay muted loop style={{ width: "100%", height: '100%', marginBottom: "50px", padding: "10px" }}>
              <source src="/images/post/Boat-Demo.mp4" />
            </video>
            <div>
              <article>
                {config.settings.InnerPaginationOptions.enableTop && (
                  <div className="mt-4">
                    <InnerPagination posts={posts} date={date} />
                  </div>
                )}
                <ul className="flex items-center space-x-4">
                  <li>
                    <Link
                      className="inline-flex items-center font-secondary text-xs leading-3"
                      href="/about"
                    >
                      <FaUserAlt className="mr-1.5" />
                      {author}
                    </Link>
                  </li>
                  <li className="inline-flex items-center font-secondary text-xs leading-3">
                    <FaRegCalendar className="mr-1.5" />
                    {dateFormat(date)}
                  </li>
                </ul>
                <div className="content mb-16">
                  <MDXRemote {...mdxContent} components={shortcodes} />
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;

import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  /** Where the MDX files live; defaults to the blog. */
  dir?: string[];
  /** Route the cards link under; defaults to /blog. */
  basePath?: string;
  /** Show each post's one-line summary under the title. */
  showSummary?: boolean;
  /** "list" = text index rows instead of image cards. */
  layout?: "card" | "list";
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
  dir = ["src", "app", "blog", "posts"],
  basePath = "/blog",
  showSummary = false,
  layout = "card",
}: PostsProps) {
  let allBlogs = getPosts(dir);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          s={{ columns: 1, marginBottom: "8" }}
          fillWidth
          marginBottom="40"
          gap="16"
        >
          {displayedBlogs.map((post) => (
            <Post
              key={post.slug}
              post={{ slug: post.slug, metadata: post.metadata }}
              thumbnail={thumbnail}
              direction={direction}
              href={`${basePath}/${post.slug}`}
              showSummary={showSummary}
              layout={layout}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

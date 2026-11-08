import { Column, Heading, Line, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { Newsletter } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24" paddingBottom="48">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m" paddingX="24" marginBottom="l">
        <Heading variant="heading-strong-xl" wrap="balance">
          {blog.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {blog.description}
        </Text>
        <Row fillWidth paddingY="16">
          <Line maxWidth={48} />
        </Row>
      </Column>
      <Column fillWidth gap="40" s={{ gap: "24" }}>
        <Posts layout="list" showSummary />
        <Newsletter marginBottom="l" />
      </Column>
    </Column>
  );
}

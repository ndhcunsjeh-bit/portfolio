import { Column, Heading, Line, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, person, review } from "@/resources";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: review.title,
    description: review.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(review.title)}`,
    path: review.path,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Review() {
  return (
    <Column maxWidth="m" paddingTop="24" paddingBottom="48">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={review.title}
        description={review.description}
        path={review.path}
        image={`/api/og/generate?title=${encodeURIComponent(review.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${review.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m" paddingX="24" marginBottom="l">
        <Heading variant="heading-strong-xl" wrap="balance">
          {review.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {review.description}
        </Text>
        <Row fillWidth paddingY="16">
          <Line maxWidth={48} />
        </Row>
      </Column>
      <Column fillWidth gap="40" s={{ gap: "24" }}>
        <Posts
          dir={["src", "app", "review", "posts"]}
          basePath={review.path}
          layout="list"
          showSummary
        />
      </Column>
    </Column>
  );
}

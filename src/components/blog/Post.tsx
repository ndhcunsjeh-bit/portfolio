"use client";

import { Card, Column, Line, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: {
    slug: string;
    metadata: {
      title: string;
      publishedAt: string;
      summary?: string;
      image?: string;
      tag?: string;
    };
  };
  thumbnail: boolean;
  direction?: "row" | "column";
  /** Where the card points to. Defaults to /blog/<slug>; 复盘 reuses this card. */
  href?: string;
  /** Show the one-line summary under the title (复盘 needs the takeaway in the list). */
  showSummary?: boolean;
  /** "list" is a text index row — reads better for 日志/复盘, which have no covers. */
  layout?: "card" | "list";
}

export default function Post({
  post,
  thumbnail,
  direction,
  href,
  showSummary = false,
  layout = "card",
}: PostProps) {
  const link = href ?? `/blog/${post.slug}`;
  const date = formatDate(post.metadata.publishedAt, false);

  if (layout === "list") {
    return (
      <Card
        fillWidth
        key={post.slug}
        href={link}
        transition="micro-medium"
        direction="column"
        border="transparent"
        background="transparent"
        padding="4"
        radius="l-4"
      >
        <Column fillWidth gap="8" paddingY="20" s={{ paddingY: "16" }}>
          <Row gap="12" vertical="center" wrap>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {date}
            </Text>
            {post.metadata.tag && (
              <Text variant="label-strong-s" onBackground="brand-weak">
                {post.metadata.tag}
              </Text>
            )}
          </Row>
          <Text variant="heading-strong-l">{post.metadata.title}</Text>
          {showSummary && post.metadata.summary && (
            <Text variant="body-default-m" onBackground="neutral-weak">
              {post.metadata.summary}
            </Text>
          )}
        </Column>
        <Line background="neutral-alpha-weak" />
      </Card>
    );
  }

  return (
    <Card
      fillWidth
      key={post.slug}
      href={link}
      transition="micro-medium"
      direction={direction}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="16 / 9"
        />
      )}
      <Row fillWidth>
        <Column
          maxWidth={28}
          paddingY="24"
          paddingX="l"
          gap="20"
          vertical="center"
          s={{ paddingY: "16", paddingX: "16", gap: "12" }}
        >
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" aria-label={person.name} />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {date}
            </Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          {showSummary && post.metadata.summary && (
            <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
              {post.metadata.summary}
            </Text>
          )}
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="neutral-weak">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}

import {
  Avatar,
  Button,
  Column,
  Grid,
  Heading,
  IconButton,
  Line,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { baseURL, me, person, social } from "@/resources";
import { SchoolBadge } from "@/components/SchoolMark";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: me.title,
    description: me.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(me.title)}`,
    path: me.path,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Me() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingBottom="48">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={me.title}
        description={me.description}
        path={me.path}
        image={`/api/og/generate?title=${encodeURIComponent(me.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${me.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* 顶部：比关于页轻，先给一句话 */}
      <Column fillWidth gap="m" paddingX="24">
        <Row gap="16" vertical="center" marginBottom="8">
          <Avatar src={person.avatar} size="l" aria-label={person.name} />
          <Column gap="2">
            <Text variant="label-strong-m" onBackground="brand-weak">
              {person.name}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.role}
            </Text>
            {person.school && (
              <Row gap="8" vertical="center" paddingTop="4">
                <SchoolBadge size={14} />
              </Row>
            )}
          </Column>
        </Row>
        <Heading variant="display-strong-l" wrap="balance">
          {me.headline}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {me.intro}
        </Text>
      </Column>

      {/* 现在 */}
      <Column fillWidth gap="m" paddingX="24">
        <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
          <Heading as="h2" variant="display-strong-xs">
            现在的三件事
          </Heading>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {new Date().getFullYear()}
          </Text>
        </Row>
        <Grid columns="3" s={{ columns: 1 }} gap="16" fillWidth>
          {me.now.map((item) => (
            <Column
              key={item.title}
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
              padding="l"
              gap="8"
              fillWidth
            >
              <Text variant="label-strong-s" onBackground="brand-weak">
                {item.label}
              </Text>
              <Text variant="heading-strong-s" wrap="balance">
                {item.title}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      {/* 工作方式 */}
      <Column fillWidth gap="m" paddingX="24">
        <Heading as="h2" variant="display-strong-xs" marginBottom="4">
          做事的方式
        </Heading>
        <Column fillWidth gap="l">
          {me.habits.map((habit, index) => (
            <Row key={habit.title} gap="24" vertical="start" fillWidth>
              <Row minWidth={3} paddingTop="4">
                <Text variant="label-strong-s" onBackground="neutral-weak">
                  {String(index + 1).padStart(2, "0")}
                </Text>
              </Row>
              <Column gap="4" flex={1}>
                <Text variant="heading-strong-m">{habit.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {habit.description}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      {/* 结尾：联系方式 */}
      <Column fillWidth gap="m" paddingX="24">
        <Line background="neutral-alpha-weak" />
        <Text variant="body-default-l" wrap="balance" paddingTop="8">
          {me.closing}
        </Text>
        <Row gap="8" wrap paddingTop="4">
          <Button
            href={`mailto:${person.email}`}
            prefixIcon="email"
            label={person.email}
            size="s"
            variant="secondary"
            weight="default"
          />
          {social
            .filter((item) => item.icon !== "email")
            .map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    aria-label={item.name}
                    tooltip={item.name}
                    size="m"
                    variant="secondary"
                  />
                ),
            )}
        </Row>
      </Column>
    </Column>
  );
}

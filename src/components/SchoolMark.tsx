import { person } from "@/resources";

/**
 * 校徽。SVG 作为 CSS mask 使用，颜色跟 currentColor 走，
 * 所以浅色/深色主题下都不用换图。
 */
export function SchoolMark({ size = 20 }: { size?: number }) {
  if (!person.school) return null;
  const ratio = 80 / 69.43;
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: Math.round(size * ratio * 100) / 100,
        height: size,
        flexShrink: 0,
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${person.school.logo})`,
        maskImage: `url(${person.school.logo})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/** 校徽 + 校名，页头和关于页共用。 */
export function SchoolBadge({ size = 18 }: { size?: number }) {
  if (!person.school) return null;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <SchoolMark size={size} />
      <span>{person.school.name}</span>
    </span>
  );
}

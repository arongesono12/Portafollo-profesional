"use client";

import type { CSSProperties } from "react";
import socialIconsData from "react-native-ico-social-media/src/data";

const socialIcons = socialIconsData as Record<string, string>;

type SocialMediaIconProps = {
  name: string;
  size?: number;
  className?: string;
  title?: string;
};

export function SocialMediaIcon({ name, size = 20, className, title }: SocialMediaIconProps) {
  const svg = socialIcons[name];

  if (!svg) {
    return null;
  }

  return (
    <span
      suppressHydrationWarning
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      style={
        {
          "--social-icon-size": `${size}px`,
        } as CSSProperties
      }
    />
  );
}

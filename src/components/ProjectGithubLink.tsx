"use client";

import { logEvent } from "@/lib/logger";

type Props = {
  url: string;
  repoName: string;
};

export default function ProjectGithubLink({ url, repoName }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand transition-colors duration-200"
      onClick={() =>
        logEvent({
          section: "Projects",
          action: "click",
          label: `github.${repoName}`,
        })
      }
    >
      GitHub →
    </a>
  );
}

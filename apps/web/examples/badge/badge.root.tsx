// import { Badge } from "tao-react";

const code = `
"use client";

import { Badge } from "tao-react";

export function Component() {
  return (
    <div className="flex">
      <Badge color="primary">primary</Badge>
    </div>
  );
}
`;

const codeRSC = `
import { Badge } from "tao-react";

export function Component() {
  return (
    <div className="flex">

      <Badge color="primary">primary</Badge>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      {/* <Badge color="info">Default</Badge>

      <Badge color="primary">primary</Badge> */}
    </div>
  );
}

export const root: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "badge/badge.root.tsx",
  component: <Component />,
};

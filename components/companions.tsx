"use client";

import { Companion } from "@prisma/client";

interface CompanionProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

export const Companions = ({ data }: CompanionProps) => {
  return <div>Companions</div>;
};

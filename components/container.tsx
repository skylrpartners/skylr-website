import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1200px] px-8 max-[960px]:px-[22px]">
      {children}
    </div>
  );
}

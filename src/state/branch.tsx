import React, { createContext, useContext, useMemo, useState } from "react";
import { BRANCHES, type Branch } from "../data/branches";

type BranchState = {
  branch: Branch;
  setBranchId: (id: string) => void;
  branchId: string;
};

const Ctx = createContext<BranchState | null>(null);

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const defaultId = BRANCHES[0]?.id ?? "default";
  const [branchId, setBranchId] = useState<string>(() => {
    const saved = localStorage.getItem("sesame.branchId");
    return saved || defaultId;
  });

  const branch = useMemo(() => BRANCHES.find((b) => b.id === branchId) ?? BRANCHES[0], [branchId]);

  const value: BranchState = useMemo(
    () => ({
      branchId,
      branch,
      setBranchId: (id: string) => {
        setBranchId(id);
        localStorage.setItem("sesame.branchId", id);
      },
    }),
    [branch, branchId],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useBranch() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBranch must be used within BranchProvider");
  return ctx;
}

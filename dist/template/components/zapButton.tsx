// components/ZapButton.tsx
// auto-generated ZapButton with guard + status check

import React from "react";

export function ZapButton({
  model,
  transition,
  id,
  status,
  user,
}: {
  model: string;
  transition: string;
  id: number | string;
  status: string;
  user: { role: string };
}) {
  // 仮の権限条件：transition + user.role + status による制御
  // guard: ({ user }) => user.role === "admin"
  const guards: Record<string, (user: { role: string }) => boolean> = {
    approve: (user) => user.role === "admin",
    submit: () => true,
  };

  const statusRules: Record<string, string[]> = {
    approve: ["reviewing"],
    submit: ["draft"],
  };

  const canShow = statusRules[transition]?.includes(status);
  const canActivate = guards[transition]?.(user);

  if (!canShow) return null;

  const handleClick = async () => {
    await fetch(`/api/${model}s/${transition}?id=${id}`, { method: "POST" });
    location.reload();
  };

  return (
    <button onClick={handleClick} disabled={!canActivate}>
      {transition}
    </button>
  );
}

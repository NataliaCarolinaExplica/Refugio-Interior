import { Stage } from "../types";

interface Props {
  stage: Stage;
}

export function StageIndicator({ stage }: Props) {
  const stages: { key: Stage; label: string }[] = [
    { key: "landing", label: "Aterrizaje" },
    { key: "observation", label: "Observación" },
    { key: "deepening", label: "Profundización" },
    { key: "closing", label: "Cierre" },
  ];

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
      {stages.map((s) => (
        <span
          key={s.key}
          style={{
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            backgroundColor: stage === s.key ? "#c7d2fe" : "#e5e7eb",
          }}
        >
          {s.label}
        </span>
      ))}
    </div>
  );
}

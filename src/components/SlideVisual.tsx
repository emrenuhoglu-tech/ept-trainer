import { RangeGrid } from "./RangeGrid";
import { CardRow } from "./Cards";
import { VideoPlayer } from "./VideoPlayer";
import { CaseReplay, type ReplayData } from "./CaseReplay";

// Bildirimsel görsel altyapısı: herhangi bir slayt/modül bir Visual deklare eder,
// SlideVisual doğru bileşene yönlendirir. Yeni görsel türü eklemek = buraya bir case.
export type Visual =
  | { kind: "hand"; cards: string; label?: string; size?: "sm" | "md" | "lg" }
  | { kind: "board"; cards: string; label?: string; size?: "sm" | "md" | "lg" }
  | { kind: "range"; value?: string; blof?: string; flat?: string; caption?: string; compact?: boolean; valueLabel?: string; blofLabel?: string }
  | { kind: "replay"; replay: ReplayData }
  | { kind: "video"; src: string; poster?: string };

export function SlideVisual({ v }: { v: Visual }) {
  switch (v.kind) {
    case "hand":
      return <CardRow spec={v.cards} size={v.size || "lg"} label={v.label} />;
    case "board":
      return <CardRow spec={v.cards} size={v.size || "md"} label={v.label ?? "Board"} texture />;
    case "range":
      return (
        <RangeGrid
          value={v.value}
          blof={v.blof}
          flat={v.flat}
          caption={v.caption}
          compact={v.compact}
          valueLabel={v.valueLabel}
          blofLabel={v.blofLabel}
        />
      );
    case "replay":
      return <CaseReplay data={v.replay} />;
    case "video":
      return <VideoPlayer src={v.src} poster={v.poster} />;
  }
}

// Birden çok görseli dikey diz.
export function SlideVisuals({ items }: { items?: Visual[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="space-y-4">
      {items.map((v, i) => (
        <SlideVisual key={i} v={v} />
      ))}
    </div>
  );
}

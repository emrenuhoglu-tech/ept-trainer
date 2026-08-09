import { useState } from "react";

// Yerel mp4 oynatıcı. Kaynak public/videos/<src> altında aranır.
// Dosya yoksa (henüz render edilmediyse) nazik bir yer-tutucu gösterir —
// video sonradan herhangi bir x64/bulut makinede üretilip buraya konabilir.
export function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const [failed, setFailed] = useState(false);
  const url = /^(https?:|\/)/.test(src) ? src : `/videos/${src}`;

  if (failed) {
    return (
      <div className="rounded-xl border border-dashed border-surface-3 bg-surface-1 p-4 text-sm text-neutral-400">
        🎬 Video henüz eklenmedi.
        <div className="mt-1 text-xs text-neutral-500">
          Beklenen dosya: <code>public/videos/{src}</code> — üretilince otomatik oynar.
        </div>
      </div>
    );
  }
  return (
    <video
      className="w-full rounded-xl bg-black"
      controls
      playsInline
      preload="metadata"
      poster={poster}
      onError={() => setFailed(true)}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}

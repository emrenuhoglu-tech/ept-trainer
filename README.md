# EPT Trainer

Poker Cep Kitabı v3'ü üç modlu antrenman uygulamasına çeviren, tek kullanıcılık mobil-öncelikli web uygulaması. Hedef: EPT Barcelona, 16 Ağustos 2026.

- **Ders Modu** — 7 modül, slayt + sesli hoca anlatımı (otomatik ilerletme, hız ayarı, HD ses)
- **Drill Modu** — Sokratik canlı hoca (Claude), karne + spaced repetition
- **Hızlı Referans** — molada bakılan tek ekran

Tüm poker içeriği `content/poker_cep_kitabi_v3.md`'den gelir (tek doğruluk kaynağı). Ayrıntı: `CLAUDE.md`, `PROJECT_BRIEF.md`.

## Kurulum

```bash
npm install
cp .env.example .env      # sonra .env'i doldur (aşağıya bak)
```

`.env` (hepsi opsiyonel; Ders + Hızlı Referans hiçbirini gerektirmez):

| Değişken | Ne için |
|---|---|
| `ANTHROPIC_API_KEY` | **Drill Modu** (zorunlu). Model çağrıları proxy üzerinden. |
| `ANTHROPIC_MODEL` | Varsayılan `claude-fable-5`. |
| `ANTHROPIC_FALLBACK_MODEL` | Varsayılan `claude-opus-4-8` (refusal/hata olursa). |
| `OPENAI_API_KEY` | **HD ses** (opsiyonel, `gpt-4o-mini-tts`). Yoksa Web Speech. |
| `ELEVENLABS_API_KEY` + `ELEVENLABS_VOICE_ID` | HD ses alternatifi. |

## Çalıştırma

Faz 1 (Ders + Referans) tek başına yeter:

```bash
npm run dev
```

Drill ve HD ses için **iki terminal**:

```bash
npm run server    # proxy (Drill + TTS), :8787 — .env okur
npm run dev        # uygulama, :5173 — /api'yi proxy'ye yönlendirir
```

Telefondan: PC ile aynı Wi-Fi'de `http://<pc-ip>:5173` (`host:true` açık).

## Model

Drill Modu **her şey için `claude-fable-5`**; refusal ya da hata olursa **`claude-opus-4-8`**'e düşer (proxy içinde). `.env`'den değiştirilebilir. Fable 5 pahalı bir modeldir ($10/$50 /1M token); KITAP her istekte önbelleğe alınır (cache_control) → tekrar eden kısım ~0.1× fiyatlanır.

## Ses

- **Web Speech (varsayılan):** tarayıcı, tr-TR, ücretsiz. İngilizce terimler (3-bet, bluff-catcher…) `src/lib/speech.ts`'teki telaffuz sözlüğüyle düzeltilir.
- **HD ses:** Ders oynatıcıda "🔊 HD" düğmesi. Proxy üzerinden OpenAI/ElevenLabs, mp3 IndexedDB'de modül+slayt bazında önbelleğe alınır (tekrar dinlemede API'ye gitmez). Anahtar yoksa sessizce Web Speech'e düşer.

## Video (Remotion — opsiyonel, Faz 3)

Her modülü dikey (1080×1920) mp4'e çevirir. Ayrı alt-paket (ana uygulamayı şişirmez):

```bash
cd video
npm install
# (opsiyonel) anlatım seslerini üret — ana projede 'npm run server' çalışırken:
npm run tts:prerender
npm run render:module -- M5     # out/M5.mp4
npm run studio                  # önizleme
```

Ses önceden üretilmezse video sessiz + altyazılı render olur. Tablo/aralık slaytları videoda "uygulamada interaktif" placeholder'ı gösterir.

## Yapı

```
content/          poker_cep_kitabi_v3.md (kaynak), karne_seed.json
server/proxy.mjs  Drill (Anthropic) + TTS proxy; anahtar burada, istemciye sızmaz
src/
  data/           modules.ts (7 modül + anlatım), kitap_summary.ts, karne_seed.ts
  content/        curriculum.ts (MD parser)
  lib/            speech.ts (Web + HD ses), storage.ts, karne.ts, drillClient.ts
  prompts/        drill_system.md
  components/     DataTable.tsx
  modes/          lessons/ · reference/ · drill/
video/            Remotion projesi (opsiyonel)
```

## İçerik kuralı

Poker içeriği (aralıklar, kurallar, vakalar) `content/poker_cep_kitabi_v3.md`'den birebir gelir. GTO ile çelişirse doküman kazanır — kişiye kalibre. `content/` salt okunurdur.

# EPT Trainer — proje talimatları
Bu repo Poker Cep Kitabı v4'ü (content/poker_cep_kitabi_v4.md) üç modlu antrenman uygulamasına çevirir. (v3 tarihsel referans olarak durur; aktif kaynak v4.)

## İçerik kuralları (EN ÖNEMLİ)
- Poker içeriğini ASLA kendi GTO bilginle yeniden yazma veya iyileştirme. Tüm aralıklar, kurallar, vakalar content/poker_cep_kitabi_v4.md'den birebir gelir. Genel teoriyle çelişirse DOKÜMAN KAZANIR — bu doküman kişiye özel kalibre edilmiştir.
- Anlatım (narration) metinlerinde içeriği değiştirmeden konuşma diline çevir, sen-dili kullan.
- Üç kavram her modülde tutarlı: "kök hata" (tek per'in şişmiş potta yanlış sınıflandırılması), "board sahipliği", "stack modu önce".
- Dil Türkçe; poker terimleri İngilizce kalır (3-bet, check-raise, bluff-catcher, OOP/IP, flat).

## Teknik
- React + Vite + Tailwind. UI kütüphanesi yok, elle yaz. Mobil öncelikli (390px), koyu tema.
- API anahtarları sadece .env (ANTHROPIC_API_KEY, opsiyonel ELEVENLABS_API_KEY). .env.example güncel tut.
- Anthropic çağrıları server/proxy.mjs üzerinden; istemciden doğrudan API'ye çıkma.
- Ses: src/lib/speech.ts adapter'ı. Varsayılan Web Speech (tr-TR), anahtar varsa ElevenLabs.
- Kalıcılık sadece localStorage. Auth yok (tek kullanıcı).

## Yapma
- content/ altını düzenleme (salt okunur kaynak).
- Aralık tablolarını "daha doğru" değerlerle değiştirme.

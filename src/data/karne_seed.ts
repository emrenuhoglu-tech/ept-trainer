// Drill karnesi tohum verisi. İlk açılışta localStorage'a yüklenir (bkz. lib/karne.ts).
// due hesabı orada: wrong +1 gün, half +2, correct +5.

export interface KarneSeedItem {
  id: string;
  kavram: string;
  soru_ozeti: string;
  sonuc: "wrong" | "half" | "correct";
  not: string;
}

export const KARNE_SEED: KarneSeedItem[] = [
  {
    id: "S1-value-boyut",
    kavram: "boyut",
    soru_ozeti: "AK top pair kuru boardda river value boyutu",
    sonuc: "half",
    not: "Fold okuması doğru, yarım pot yerine 1/3 olmalıydı",
  },
  {
    id: "S2-ak-stack-call",
    kavram: "kök-hata",
    soru_ozeti: "3-bet potunda AK top pair, eşleşmiş riverda stack lead'ine call",
    sonuc: "wrong",
    not: "Pasiften agresife geçiş + eşleşmiş river = value",
  },
  {
    id: "S4-kjo-xr",
    kavram: "blof-secimi",
    soru_ozeti: "T94 boardda KJo gutshot ile check-raise",
    sonuc: "wrong",
    not: "Board sahipliği ≠ el sınıfı; gutshot bağlantı değil, showdown değeri blöfe çevrilmez",
  },
  {
    id: "S5-aa-fold-erken",
    kavram: "kök-hata",
    soru_ozeti: "T94 boardda AA'yı flop check-raise'ine fold",
    sonuc: "wrong",
    not: "Aşırı düzeltme; erken sokakta call, hikâye tamamlanınca fold",
  },
  {
    id: "S6-jt-60bb",
    kavram: "3bet-aralik",
    soru_ozeti: "60bb CO'da JTs vs LJ reg açılışı — cevaplanmadı",
    sonuc: "wrong",
    not: "Üç kez ertelendi; ilk seansta MUTLAKA sorulacak",
  },
];

// İlk drill seansının ilk sorusu MUTLAKA bu (S6). İstemci tarafında sabit
// gösterilir; modele bağlı değildir, böylece garanti edilir.
export const FIRST_QUESTION =
  "60bb, LJ'den reg açtı, sen CO'da JTs. 3-bet mi, call mi, fold mu? Ve neden diğer ikisi değil?";

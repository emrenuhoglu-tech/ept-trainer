// Poker Cep Kitabı v4'ün ~2200 kelimelik müfredat özeti.
// KITAP olarak her drill isteğinde modele gider — doğruluk kaynağı budur.
// İçerik content/poker_cep_kitabi_v4.md'den; kısaltılmış ama değiştirilmemiştir.

export const KITAP = `POKER CEP KİTABI v4 — EPT Barcelona. Aşağıdaki her şey Emre'ye özel kalibre edilmiştir; genel GTO ile çelişirse BU DOKÜMAN kazanır. Poker terimleri İngilizce (3-bet, check-raise, bluff-catcher, OOP/IP, flat).

BÖLÜM 0 — MASAYA GÖTÜRÜLECEK 11 CÜMLE
1. Tek per, şişmiş potta bluff-catcher'dır — AA dahil. Kök hata bu.
2. River'da senden zayıf el ödemeyecekse, jam value değildir. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.
3. Chop'lar jam atmaz. Rakip all-in geldiyse bölüşmeye oynayan eli aralığından çıkarmıştır.
4. Blöf üç kriterden geçer: bloker, bağlantı, board sahipliği. Hamleyi board'un sahibi seçer.
5. Aldatıcı orta eller (JTs, KQ, KJ, 97s) küçük pot kazananı, büyük pot kaybedenidir. Rolü open/flat/BB-defend; asla büyük pot başlatıcı değil.
6. Equity kâğıt üzerinde, para masada kazanılır. Oynanabilirlik equity'den önce gelir. KQo'nun %45'i realize edilemiyorsa fold'dur.
7. Her elden önce stack modu, sonra aralık. 45bb'de 130bb aralığı oynamak en pahalı alışkanlık.
8. OOP 3-bet aralığım IP aralığımdan belirgin sıkıdır. Çünkü OOP şişmiş potta tek per bluff-catcher'dır.
9. Canlıda kâr blöf 3-bet'ten değil, geniş value 3-bet'inden gelir. Alan fold etmiyor; dengesizlikten kâr et.
10. PLO'da çıplak AA, NLH'deki tek per'dir. Nut potansiyeli yoksa el büyük pot oynamaz.
11. 25–30bb'de değer fold equity'den gelir, kart tamamlamaktan değil. Aradığın el gelişebilen değil şimdiden iyi olan: as, broadway, çift.

BÖLÜM 1 — BLÖF SEÇİMİ
Üç kriter (üçü birden gerekli, biri eksikse blöf değil sadece kaybedilen chip): BLOKER (rakibin en güçlü ellerini elinden alan kart, ör. A tutmak nut flush'ı bloke eder), BAĞLANTI (board'a temas eden, gelişebilen yapı — OESD/FD, sadece iki yüksek kart değil), BOARD SAHİPLİĞİ (board kimin aralığına çarpıyor; T98/765 senin, A-K-7 kuru rakibin).
J2s dersi: suited olmak eli blöf yakıtı yapmaz — J2s'in blokeri yok, bağlantısı zayıf, tamamlansa bile alt flush riski. Aranan şey suited değil, bağlı ve bloker. Offsuit broadway'de ters tuzak (KJo, QJo): bloker var, bağlantı yok — onlar da blöf yakıtı değil.
Hamle seçimi: Check-raise blöf SENİN aralığına çarpan boardlarda (T98, 765, J-orta bağlantılı). Rakibin aralığına çarpan boardlarda (A-K yüksek kuru) draw'lar sessizce CALL eder. A-K-7 board'u CO'nun open aralığını ezer, senin BB savunmanda az A-K var → check-raise inandırıcı değil, iyi eller call eder sadece hava fold eder. Call her şeyi çözer: ucuza turn, tamamlanınca gizli güç, boşsa ucuz çıkış.
Kime blöf yapılmaz: Rec/station (fold etmez → value bet), kısa stack (otomatik call), committed oyuncu (fold kapalı), bubble'da hayatta kalan büyük stack (bedavaya öder).

BÖLÜM 2 — ALDATICI ORTA ELLER
JTs, KQ, KJ, 97s: küçük pot kazananı, büyük pot kaybedeni. Rolü open/flat/BB-defend; ASLA büyük pot başlatıcı (3-bet, stack-off) değil. Neden: JTs top pair'de kicker sorunu, KQ AK/AQ gölgesinde, 97s iki per'de bile üstü açık. Küçük potta marjinal ellerden para sızdırır; pot büyüyünce karşı aralık daralır ve güçlenir, dominate edilirler. El aynı, pot boyutu değişince kazanan taraf değişir.
KQo vakası: 42bb, HJ reg (~%22) açtı, sen CO'da KQo → FOLD. Ham equity ~%45 ama realize edilemiyor: AK/AQ/KK/QQ/AA en iyi floplarını (K veya Q) en pahalı tuzağa çevirir. Equity kâğıt üzerinde, para masada.

BÖLÜM 3 — STACK MODLARI + ICM
Önce mod, sonra aralık. 80bb+: standart chartlar, suited connector ve küçük çift değeri tavan. 40-60bb: ilk daralma, boyut sabit, offsuit alt bant düşer (KTo, QJo, J9o). 25-40bb: ciddi mod değişimi, suited connector değer kaybeder, A-x değer kazanır, 'jam'e karşı net karar' filtresi. 15-25bb: open-jam sınırı. <15bb: jam/fold, aralık dışı hamle yok.
30bb altı orta çiftler (77-TT): post-flop eli değil, jam-or-fold. Set gelmezse üç sokak ödeyecek stack yok; gelse bile kısa stack'le maksimum alınmaz.
ICM: Bubble'da 30bb ≠ Day 1'de 30bb. Solunda kısa stack varsa açılışı genişlet (onlar hayatta kalmaya oynuyor); solunda büyük stack varsa daralt (seni cezasız 3-bet ederler). Bubble'da orta stack en kırılgan pozisyon — sabır.

BÖLÜM 4 — POZİSYONA GÖRE 3-BET VE CALL ARALIKLARI (100-150bb, 8 kişilik masa)
Mantık: şişmiş pot %90 3-bet'li pottur, kök hata preflop'ta doğar. 3-bet aralığını doğru kurmak kök hatanın frekansını düşürür. İki test: (1) 3-bet edip flop görürsem tek per rahat mıyım? Değilsem flat veya fold. (2) OOP mu kalıyorum? OOP 3-bet potunda tek per bluff-catcher'dır, bu yüzden OOP aralıkları IP'den sıkıdır.
Canlı düzeltme: 3-bet'e az fold ederler → blöf 3-bet düşür, value 3-bet genişlet. 4-bet blöfü yok → 4-bet görünce QQ ve altını ciddiye al, AK otomatik 5-bet değil. Açılışlar geniş/coldcall çok → squeeze en kârlı hamlen, multiway'de blöf 3-bet bırak. Canlıda para geniş value 3-bet'inden gelir.
Boyutlar: IP 3-bet açılışın 3× (canlıda 3.5×). OOP 3-bet (blinds dahil) 4×. Her coldcaller için +1 açılış boyutu. Squeeze 4.5-5×. 4-bet IP 3-bet'in 2.2×, 4-bet OOP 2.5×.
UTG/UTG+1 açılışına karşı (disiplin bölgesi): LJ/HJ value QQ+,AKs,AKo blöf yok. CO value QQ+,AKs,AKo(JJ karışım) blöf A5s. BTN value JJ+,AKs,AKo,AQs blöf A5s,A4s. SB value QQ+,AKs,AKo blöf yok. BB value QQ+,AKs,AKo blöf A5s(seyrek). Flat (yalnız IP,100bb+): TT-77,AQs,AJs,ATs,KQs,KJs,QJs,JTs,T9s,98s (150bb+ ise 66-22,87s,76s). YAPMA: UTG açılışına AJo/KQo/KJo coldcall — bu eller ya 3-bet ya fold, ortada oynanınca kök hatayı yaşatır.
LJ/HJ açılışına karşı: CO value JJ+,AQs+,AKo blöf A5s,A4s. BTN value TT+,AQs+,AKo,AQo blöf A5s-A3s,KJs,QJs. SB value JJ+,AQs+,AKo blöf A5s,A4s. BB value TT+,AQs+,AKo,AQo blöf A5s-A3s,KJs,T9s. Flat IP(CO/BTN): 99-22,AJs,ATs,KQs,KJs,KTs,QJs,QTs,JTs,T9s,98s,87s,76s.
CO açılışına karşı: BTN value TT+,AJs+,AQo+,KQs blöf A5s-A2s,KTs,QTs,J9s,T8s. SB value JJ+,AJs+,AQo+,KQs blöf A5s-A3s,KJs. BB value TT+,ATs+,AQo+,KQs,KJs blöf A5s-A2s,K9s,QTs,J9s. BTN flat: 99-22,AJo,KJo,KTs,QJs,QTs,JTs ve tüm 65s+ suited connector.
BTN açılışına karşı (steal savunması): SB value 88+,ATs+,AJo+,KJs+,QJs blöf A5s-A2s,K9s,Q9s,J9s,T8s,87s. BB value 99+,ATs+,AQo+,KQs,KJs blöf A5s-A3s,K9s-K7s,QTs,J9s,T8s,76s. SB flat neredeyse yok (100bb'de kayıp, 3-bet ya fold; istisna 200bb+ zayıf BTN). BB flat çok geniş (aksiyonu kapatıyorsun).
SB açılışına karşı (yalnız BB, alanın en kârlı 3-bet spotu): value 88+,A9s+,ATo+,KTs+,QTs+,JTs. blöf K7s+,Q8s+,J8s+,T8s,97s,86s,65s. Flat: kalan her oynanabilir el.
Coldcall'un üç şartı (üçü birden): (1) Pozisyon (IP ya da BB'de aksiyonu kapatıyorsun), (2) Derinlik (efektif stack call'un ≥15×'i; 100bb'de 3bb call→45bb+ arka tamam, 40bb'de değil), (3) Ödeyen rakip (set'te para verecek biri; sıkı reg karşısında set-mining kârsız). Multiway: arkanda agresif oyuncu varsa sıkı elle flat seni squeeze'e açar → 3-bet'e yükselt ya at.
3-bet'e karşı cevabın: 4-bet value KK+,AKs(geç poz 3-bettor). 4-bet karışım QQ,AKo(geç poz'a evet, UTG'ye hayır). 4-bet blöf A5s,A4s (canlıda ÇOK seyrek; kimse fold etmiyorsa para yakmak). Flat(IP,150bb+) JJ,TT,AQs,KQs. Fold: OOP tüm offsuit broadway (AJo,KQo,ATo). 4-bet'li pot şişmiş pottur — AA ile flop+turn value alıp kötü river'da jam Vaka 3'ün tekrarıdır.
Squeeze (canlıda en kârlı tek hamle): coldcaller aralığı sıkı ama zayıf (4-bet edemez, çoğunu fold eder). VALUE JJ+,AQs+,AKo. BLÖF A5s-A4s,KQs,AJs. Boyut 4.5× IP, blinds'ten 5×+. Coldcaller balıksa blöfü kes, sadece value squeeze.
Stack modu üst katmanı: 200bb+ value ağırlıklı flat en geniş. 100-150bb tablolar geçerli. 60-100bb polarize, set-mining zayıflar. 40-60bb lineer, flat yok, 3-bet ya fold. 25-40bb 3-bet=commit (4-bet'e devam edebilmeli). <25bb jam/fold. En sık hata: 45bb'de 130bb aralığı (küçük çiftle flat, suited connector'la blöf 3-bet).

BÖLÜM 5 — 25–30bb BANDI: SAVAŞ PLANI (turnuvanın en sık yaşanan, en çok chip kaybedilen bandı; Bölüm 4 tabloları 100-150bb'ye aittir, burada geçersizdir)
Bandın karakteri: Değer FOLD EQUITY'den gelir, kart tamamlamaktan değil. Aradığın el gelişebilen değil ŞİMDİDEN İYİ OLAN: as, broadway, çift. Implied odds 28bb'de çalışmaz (set/kent yapınca ödetecek stack yok, tamamlamadığın %85'te çaresizsin). Karar sırası: MOD → POZİSYON → EL. 28bb'de suited connector gelince üçüncü adıma bile geçmiyorsun.
Açılış aralıkları (boyut 2-2.2×): UTG/UTG+1 77+,ATs+,AJo+,KQs. LJ/HJ 55+,A8s+,ATo+,KTs+,QJs. CO 33+,A5s+,A9o+,K9s+,QTs+,JTs. BTN 22+,tüm A-x,K7s+,K9o+,Q9s+,J9s+,T9s. SB 22+,A2s+,A7o+,K9s+,KTo+,QTs+.
3-bet = JAM: bu bantta 3-bet commit demektir, '3-bet edip fold' yok, doğrudan all-in. Erken pozisyon açılışına jam TT+,AQs+,AKo. CO/BTN açılışına jam 88+,ATs+,AQo+,KQs. Chip leader / jam'e fold edene jam 77+,A9s+,AJo+,KQs (genişletilmiş). BU BANTTA FLAT YOK — ne SB'den, ne BB'den, ne IP'den.
Jam'e karşı call: rakip all-in geldiyse 99+,AJs+,AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yaparsın ya fold.
Fold listesi (kayıtsız şartsız fold): tüm suited connector'lar (T9s,98s,87s,76s,65s,54s), tüm suited gapper'lar, zayıf offsuit broadway (KJo,QJo,JTo), küçük çiftlerle FLAT (jam ayrı konu).
Saha vakası (GGMasters $150): 28bb'de üç el aynı soru, üçü de FOLD, belirleyici el değil mod. T9s SB 40K call teklifi → fold (SB flat kayıp pozisyon). 54s BB 73K'da 30K → fold (implied odds motoru yok). 87s BB aynı → fold (el daha iyi karar aynı). Doğru karar örneği: TT ile BTN ~23bb jam, chip leader fold etti, pot alındı (30bb altı orta çift jam-or-fold). Kural: soru 'bu el yeterince iyi mi' değil, 'bu el bu stack'te oynanabilir mi'. Spekülatif elleri fold etmek gerçek elle jam cephanesini korur.
Rakip okuma: chip leader jam'e bir kez fold ettiyse, onun açılışlarına jam aralığını genişlet — geniş açıp jam'e katlanan profil bu bantta en kârlı hedef. Öncelik: (1) o açtığında jam, (2) BTN/CO'dan açıp blindleri topla.

BÖLÜM 6 — TURN'DE DRAW: BET Mİ, BEDAVA RIVER MI
Fold equity: station'a semi-bluff para yakmak → check, bedava kart. Reg'e karşı board senin aralığındaysa → bet (iki kazanma yolu: fold ettir VEYA tamamla).
Draw kalitesi (tamamlanınca ödenir mi): Nut flush draw bet ağırlıklı (action alırsın, bloker güçlü). Düşük flush draw (97s) check ağırlıklı (üstün flush'a ödeme riski). Açık kent düz board ikisi de meşru (gizli güç). Gutshot check (semi-bluff yakıtı değil).
IP/OOP: IP'de check gerçekten bedava kart. OOP'ta check bedava garantisi vermez (rakip bet atarsa plan çöker) → draw'ı ya bet'le ya call planıyla check et, 'bedava görürüm' diye check etme.

BÖLÜM 7 — VAKA OTOPSİLERİ (üçünün kök hatası aynı: tek per'in şişmiş/multiway potta yanlış sınıflandırılması)
Vaka 1 A4s river call ($50K High Roller): chop mekaniğini gördün ama filtreyi atladın. Chop'lar jam atmaz. Kural: mekaniği görmek yetmez, rakibin hamlesi o mekanikle uyumlu mu sor.
Vaka 2 KTo top pair check-raise all-in ($10K 6-max): ıslak boardda top pair'le stack başlattın, QQ call etti. Doğrusu check-call sonra değerlendir. Tek per stack-off yakıtı değil.
Vaka 3 AA river jam (2-4-5, river 6, rakip 66): flop+turn value doğruydu, kötü river 6'da jam yanlış — senden zayıf el ödemez (üçlü/kent/set seni geçer, tek per pas). River'da senden zayıf el ödemeyecekse jam value değil. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.

BÖLÜM 8 — PLO TEMELLERİ
Zihniyet: equity'ler yakın koşar (%60/40 iyi favorilik), nut hakimiyeti her şey (ikinci en iyi el pahalı), iki pot bet = stack ortada. El seçimi: Dangler (dördüncü kart bağlantısız, AA72 → fold, pratikte 3 kartlı el), Rundown (JT98/KQJT, çift suited'ken güçlü), Çıplak AA (tek per muamelesi, nut yoksa büyük pot yok), Wrap+FD (gerçek silah, 13+ out, agresif). NLH tuzakları: AA'yı NLH gözüyle görme (çift suited değilse tek çift), top pair/two ile stack-off (iki per neredeyse hiç nut değil), blöf frekansını taşıma (aralıklar daha bağlı, blöf az geçer), OOP 3-bet potu oynama (en zor spot, şüphede flat).

HIZLI REFERANS
Karar sırası: (1) stack modum? 30bb altındaysam doğrudan Bölüm 5. (2) pozisyonum ve rakibin? (3) 3-bet/flat/fold? (4) flop'ta tek per rahat mıyım? (5) OOP mu kalıyorum? Boyutlar: IP 3-bet 3-3.5×, OOP 3-bet 4×, coldcaller başına +1×, squeeze 4.5-5×, 4-bet IP/OOP 2.2×/2.5×. 25-30bb kartı: açılış 2-2.2×, 3-bet YOK=jam, flat YOK, jam'e call 99+/AJs+/AQo+, otomatik fold suited connector+gapper+KJo/QJo/JTo. Kırmızı bayraklar: şişmiş potta tek per'le büyük karar → bluff-catcher sınıfla; river'da jam düşünüyorum → benden zayıf hangi el ödüyor, cevap yoksa jam yok; rakip all-in ben chop hesaplıyorum → chop'lar jam atmaz; 45bb'de küçük çiftle flat → mod hatası; OOP'tan blöf 3-bet → çoğu zaman hata; PLO'da çıplak AA ile pot şişirme → tek per muamelesi; 28bb'de suited connector ile pota girme → Bölüm 5 otomatik fold.`;

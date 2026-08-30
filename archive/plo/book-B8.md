## Bölüm 8 — PLO Temelleri

### 8.1 Zihniyet farkları

- **Equity'ler yakın koşar.** PLO'da %60/%40 iyi bir favoriliktir; NLH'deki %80 rahatlığı yok.
- **Nut hakimiyeti her şeydir.** İkinci en iyi el PLO'da pahalı bir eldir.
- **İki pot bet = stack ortada.** Pot büyümesi NLH'den çok hızlıdır; üçüncü sokağa geldiğinde geri dönüş yok.

### 8.1-EK Hata elde değil, aralıkta olur
Tek bir elin bet/check seçimi çoğu zaman EV'de kıl payıdır; gerçek para aralık inşasında kaybedilir. Bir el sınıfının tamamını (örneğin bütün güçlü draw'larını) bet aralığına yığdığında sorulacak tek soru şudur: o kartlar geldiğinde DİĞER hattın hâlâ kapsaması kalıyor mu? PLO'da yan kartlar bu kapsamayı çoğu zaman kendiliğinden verir (8.1-EK-2) — kapsama duruyorsa sadeleştirme ucuzdur, hatta her sınıf aynı hatta durduğu için rakibin raise'ini caydırır. Bedel yalnız kapsama kalmadığında doğar: check aralığın o kartlarda korumasız kalırsa rakip o hatta ince value ve blöf bahislerini açar ve sızıntı tek sokakta bitmez. Dikkatli rakip bunu senin elinden değil, frekanslarından okur; sen de rakipte aynı boşluğu aramalısın: hangi sınıfı hangi hatta bitiriyor, ve o hattın karşılığı boşta mı?

**Kural:** Hata avını tek elde değil aralıkta yap — bir sınıfı tek hatta bitirmenin bedeli, o kartlar geldiğinde diğer hattın kapsaması kalmadığındadır; kapsama duruyorsa basitleştirme ucuzdur (8.1-EK-2).

### 8.1-EK-2 Basitleştirme cezasızlığı — PLO'nun NLH'den gizli farkı
NLH'de "bu komboyu şu hatta hiç oynamam" dediğinde o hatta o elin hiç yoktur ve rakip bunu kullanır; her komboyu mix'lemek zorundasın. PLO'da eldeki yan kartlar her runout'u doğal olarak kapsar: draw'suz seti bet'leyip draw'lı seti check-raise'lesen bile iki aralıkta da yeterli flush draw, straight draw ve nut kalır. Bu yüzden karmaşık frekans stratejisini net kurallara basitleştirmek PLO'da çoğunlukla cezalandırılamayacak kadar güvenlidir — ve basit stratejiyi iyi icra etmek, karmaşık stratejiyi kötü icra etmekten çoğunlukla daha çok kazandırır. Altı kartta yan-kart kapsaması daha da otomatikleşir.

**Kural:** PLO'da net kurallı basit strateji kur: kart kapsaman mix zorunluluğundan kurtarır, icra kalitesi frekans hassasiyetini yener.

### 8.2 El seçimi

| Kavram | Kural |
|---|---|
| **Dangler** | Dördüncü kartı bağlantısız el (AA72) — fold. Pratikte üç kartlı el oynuyorsun |
| **Rundown** | JT98, KQJT gibi bağlı eller — özellikle çift suited olduğunda güçlü |
| **Çıplak AA** | Tek per muamelesi. Nut potansiyeli yoksa büyük pot oynamaz |
| **Wrap + FD** | Gerçek silah. 13+ out artı flush draw — agresif oynanır |

### 8.2-EK İki-kart kombosunu dengele, kombo-zengin eli slow-play'leme
Showdown'da kaç kartla oynarsan oyna elinden yalnız ikisi sayılır; bu yüzden denge dört (ya da altı) kartlık elin üzerinden değil, iki-kart kombolar üzerinden kurulur. Çok bileşenli el (set + wrap + flush draw gibi) neredeyse hep bet eder — onu "denge için" check etme. Check aralığına koyman gereken pay, aynı iki-kart kombosunun zayıf taşıyıcılarından gelir: tek başına top-two'lu, tek başına draw'lu, yan kartları ölü eller. Böylece her hatta doğru kombolar kalır ama en güçlü ellerin değer kaybetmez.

**Kural:** Slow-play payını sınıfın en zayıf taşıyıcılarından seç; çok bileşenli kombo el bet eder.

### 8.3 NLH oyuncusunun tuzakları

- **AA'yı NLH gözüyle görmek:** PLO'da AA çift suited değilse ve board'a bağlanmıyorsa sadece bir çifttir.
- **Top pair / top two ile stack-off:** PLO'da iki per neredeyse hiç nut değildir.
- **Blöf frekansını NLH'den taşımak:** PLO'da aralıklar daha bağlı, blöf daha az geçer.
- **OOP 3-bet potu oynamak:** PLO'da en zor spot. Şüphe hâlinde flat et.

### 8.3-EK "Koruma içgüdüsü" tuzağı
NLH'den gelen refleks: elim iyi, board draw ağır, o zaman basıp "koru." PLO'da bu mantık çoğunlukla tersine çalışır — bir eli sırf koruma amaçlı bastığın an, o el genelde korumayı hak edecek kadar güçlü DEĞİLDİR; gerçekten güçlü eller zaten rakibin çağırma aralığına karşı equity taşıdığı için basılır, "korumak" ayrı bir gerekçe olarak gereksizdir. Testi mutlak equity ile değil göreli yap: rakibin ÇAĞIRMA aralığı elime karşı favori mi (>%50)? Favori değilse koruma bahanesini bir kenara bırak, zaten value için bas — PLO'da %60/%40 iyi bir favoriliktir (8.1), yani rakibin "hatırı sayılır" equity taşıması normal durumdur ve tek başına check nedeni değildir; wrap + FD'ye karşı top set'i check'lemek net kayıptır (8.2: "Wrap + FD — agresif oynanır"). Rakibin çağırma aralığı elimin favorisiyse, elin zaten basmaya yetmiyor demektir: check.

**Kural:** "Koruma için basmalıyım" hissi genelde elin basmaya yetmediğinin işaretidir, tersinin değil — ölçü mutlak equity değil, rakibin çağırma aralığının elime karşı favori olup olmadığıdır.

### 8.3-EK-2 İnce value raise'de bloker, ham güçten önce gelir
İnce value raise seçerken daha güçlü ama blokersiz bir el yerine, biraz daha zayıf ama rakibin nut'una bloke eden bir eli tercih et — nut'u tuttuğun için rakip tutamaz: üstten raise'lenip dominasyona düşme, yani potun tepesine çarpma riskin azalır ve rakibin devam aralığı sana ödeyen ikinci-en-iyi ellere kayar. Dikkat: ince value'nun kazancı daha zayıf ellerin CALL'ıdır; rakibi katlatmak bu raise'in kazancı değil maliyetidir — "equity denial" gerekçesi blöf/semi-blöf raise'e aittir, buraya değil. NLH refleksiyle "en güçlü elim raise eder" mantığı da yanıltır; PLO'da ince raise seçimi mutlak el gücü değil, kimin ne taşıdığına dair bloke mantığıyla yapılır.

**Kural:** İnce value raise'de güçlü-ama-blokersiz eli değil, zayıf-ama-nut-blokerli eli seç — kazanç fold'dan değil, daha zayıf ellerin call'ından gelir; bloker fold ettirmez, rakibin üstten raise'leyen kombolarını eksiltir.

---


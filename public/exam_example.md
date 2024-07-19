# [GROUP=1]
### [TASK=1] 
##### [MAX_TASK_POINTS=2]

Deklarirajte varijable `datum_danas` i `vlaga`. U varijablu `datum_danas` spremite današnji datum koristeći `new Date()` objekt, a u varijablu `vlaga` spremite proizvoljnu vrijednost vlage kao decimalni broj od `0` do max `1`.
- Dodajte novu varijablu `mjesec` u koju ćete pohraniti trenutni mjesec koristeći `getMonth()` funkciju nad varijablom `datum_danas`, pripazite da `getMonth()` vraća mjesec kao broj od 0 do 11. Sintaksa: `varijabla.getMonth()`. Dodajte varijablu `vlaga_postotak` u koju ćete pohraniti vlagu u postocima.

- Ispišite u konzolu rečenicu: `"Mjesec je: __., a vlaga je: __%."` Mjesec i vlagu zamijenite s vrijednostima iz varijabli koristeći interpolaciju stringova (template literals) sintaksu.
- _Primjer ispisa_: `"Mjesec je: 3., a vlaga je: 40%."`

### [TASK=2] 
##### [MAX_TASK_POINTS=2]
Definirajte konstantu `PI` i dodijelite joj vrijednost broja π (3.14159). Dodajte novu varijablu `radijus` u koju ćete pohraniti proizvoljnu vrijednost radijusa cilindra. Dodajte i varijablu `visina` u koju ćete pohraniti proizvoljnu vrijednost visine cilindra. Ispišite u konzolu rečenice: `"Volumen cilindra je: ____ cm3, a površina iznosi ____ cm2."`.
Volumen i površinu zamijenite s izračunatim vrijednostima koristeći interpolaciju stringova (template literals). Kada to napravite, ispišite sličnu rečenicu međutim s vrijednostima u kvadratnim milimetrima (mm2).

- Volumen: `π r² h`
- Površina: `2 π r h + 2π r²`

### [TASK=3]
##### [MAX_TASK_POINTS=3]
Kod kuće ste s obitelji i morate odlučiti koji film pogledati, a da svi budu zadovoljni. Dosjetili ste se jednog filma, no ne možete se dogovoriti hoćete li pogledati baš taj. Koristeći logičke operatore i operatore usporedbe, definirajte varijablu `film_odabran`. Svaki od članova obitelji ima po jedan uvjet za film:

- Film mora trajati između 90 i 180 minuta.
- Film mora imati minimalno ocjenu 7.5 na IMDB-u.
- Film mora biti komedija ili akcijski film.
- Film mora biti na engleskom jeziku.

Za svaki od danih izraza deklarirajte varijable za ostvarenu vrijednost i ciljanu vrijednost, te boolean varijablu koja će sadržavati rezultat ostvarenja. Na primjer, za drugu izjavu varijable mogu biti: `min_ocjena_filma`, `ocjena_filma`, `ocjena_zadovoljena`.
Kroz varijable definirajte izraz za svaki uvjet i na kraju ispišite rezultat u obliku `film_odabran = uvjet1 && uvjet2 && uvjet3 && uvjet4`, gdje `film_odabran` mora biti `true` ili `false`.

### [TASK=4]
##### [MAX_TASK_POINTS=2]
Raspišite sljedeće izraze bez korištenja `+=`, `-=`, `*=`, `/=`, `++` ili `--` operatora. Ako smatrate da je potrebno, možete i dodati liniju koda. (MAX_TASK_POINTS = 2)

```javascript
let a = 5;
let b = 3;
b += a; // Izmijenite izraz
a -= b; // Izmijenite izraz
b += 10 + a; // Izmijenite izraz
a *= ++b; // Izmijenite izraz
console.log(a); // -48
console.log(b); // 16
// Izmijenjeni izrazi moraju u konačnici moraju vratiti isti rezultat a i b varijabli kao i originalni izrazi.
// Originalne izraze možete zakomentirati, a ispod njih napisati alternativni izraz (bez korištenja spomenutih operatora).
```

### [TASK=5]
##### [MAX_TASK_POINTS=1]
Napišite program koji uspoređuje duljinu dvije riječi i zatim ispisuje rezultat eksponencijalne operacije gdje je baza duljina dulje riječi, a eksponent duljina kraće riječi. Dulju/kraću riječ možete odabrati ručno, ne morate programski.

# [GROUP=2]
### [TASK=1]
##### [MAX_TASK_POINTS=2] 
Deklarirajte varijable `trenutno_vrijeme` i `temperatura`. U varijablu `trenutno_vrijeme` spremite trenutno vrijeme koristeći `new Date()` objekt, a u varijablu `temperatura` spremite proizvoljnu temperaturu kao cjelobrojnu vrijednost.
- Dodajte novu varijablu `godina` u koju ćete pohraniti godinu koristeći `getFullYear()` funkciju nad varijablom `trenutno_vrijeme`. Sintaksa: `varijabla.getFullYear()`.

- Ispišite u konzolu rečenicu: `"Godina je: ______-a, a temperatura je: ____C."` Godinu i temperaturu zamijenite s vrijednostima iz varijabli koristeći `template literals` sintaksu. Primjer ispisa: `"Godina je 2024-a, a temperatura je: 25C."`.

### [TASK=2]
##### [MAX_TASK_POINTS=2]
Definirajte konstantu `PI` i dodijelite joj vrijednost broja π (3.14159). Dodajte novu varijablu `radijus` u koju ćete pohraniti proizvoljnu vrijednost radijusa kruga u centimetrima. Ispišite u konzolu jednu rečenicu: `"Opseg kruga je: ____ cm odnosno ____ mm, dok je površina ____ cm2 odnosno ____ dm2"`.
Opseg i površinu zamijenite s varijablama za svaku izračunatu vrijednost za svaku mjernu jedinicu (cm = centimetri, dm = decimetri, mm = milimetri) koristeći interpolaciju stringova (template literals).
Dodajte varijablu za svaku izračunatu vrijednost opsega i površine (`opseg_cm`, `opseg_mm`, `povrsina_cm2` i `povrsina_dm2`).

(MAX_TASK_POINTS = 2)

- Opseg: `2πr`
- Površina: `π r²`

### [TASK=3]
##### [MAX_TASK_POINTS=3]
Odlučili ste provjeriti jeste li ostvarili ciljeve na kraju godine. Koristeći logičke operatore i operatore usporedbe, definirajte varijablu `cilj_ispunjen` koja govori jeste li ispunili cilj na kraju godine (ili niste). Varijabla neka ovisi o podciljevima koje ste si zadali: Da bi krajnji cilj bio ispunjen, moram:

- svaki mjesec pročitati najmanje 2 romana ili 1 knjigu.
- dnevno vježbati najmanje 30 minuta.
- uštedjeti između 100 i 200 eura mjesečno.
- naučiti svirati gitaru.

Za svaki od danih izraza deklarirajte varijable za ostvarenu vrijednost i ciljanu vrijednost, te boolean varijablu koja će sadržavati rezultat ostvarenja. Na primjer, za drugu izjavu varijable mogu biti: `vjezbanje_cilj`, `vjezbanje_ostvareno`, `vjezbanje_rezultat`.
Kroz varijable definirajte logički izraz za svaki podcilj i na kraju ispišite rezultat u obliku `cilj_ispunjen = podcilj1 && podcilj2 && podcilj3 && podcilj4`, gdje `cilj_ispunjen` na kraju mora biti `true` ili `false`.

### [TASK=4]
##### [MAX_TASK_POINTS=2]
Raspišite sljedeće izraze bez korištenja `+=`, `-=`, `*=`, `/=`, `++` ili `--` operatora. Ukoliko smatrate da je potrebno, možete i dodati jednu liniju koda. (MAX_TASK_POINTS = 2)

```javascript
let c = 8;
let d = 5;
c -= d; // Izmijenite izraz
c += d; // Izmijenite izraz
d += 20 + c; // Izmijenite izraz
c *= ++d; // Izmijenite izraz
console.log(c); // 272
console.log(d); // 34
// Izmijenjeni izrazi moraju u konačnici vratiti isti rezultat c i d varijabli kao i originalni izrazi.
// Originalne izraze možete zakomentirati, a ispod njih napisati alternativni izraz (bez korištenja spomenutih operatora).
```

### [TASK=5]
##### [MAX_TASK_POINTS=1]
Deklarirajte 3 varijable koje sadrže cjelobrojne vrijednosti. Za svaku varijablu ispišite izjavu u konzolu: `Broj __ je paran - ${parnost_broja}` gdje `__`zamijenite s brojem, a `parnost_broja` s rezultatom provjere parnosti tog broja.

# [GROUP=3]
### [TASK=1]
##### [MAX_TASK_POINTS=2] 
Deklarirajte varijable `datum_danas` i `vlaga`. U varijablu `datum_danas` spremite današnji datum koristeći `new Date()` objekt, a u varijablu `vlaga` spremite proizvoljnu vrijednost vlage kao decimalni broj od `0` do max `1`. Dodajte novu varijablu `mjesec` u koju ćete pohraniti trenutni mjesec koristeći `getMonth()` funkciju nad varijablom `datum_danas`, pripazite da `getMonth()` vraća mjesec kao broj od 0 do 11. Sintaksa: `varijabla.getMonth()`. Dodajte novu varijablu `vlaga_postotak` u koju ćete pohraniti vrijednost vlage u postotku.

- Ispišite u konzolu rečenicu: `"Mjesec je: __., a vlaga je: __%."` koristeći interpolaciju stringova (template literals) sintaksu.
- _Primjer ispisa_: `"Mjesec je: 3., a vlaga je: 40%."`

### [TASK=2]
##### [MAX_TASK_POINTS=2]
Definirajte konstantu `PI` i dodijelite joj vrijednost broja π (3.14159). Dodajte novu varijablu `radijus` u koju ćete pohraniti proizvoljnu vrijednost radijusa kugle u metrima. Ispišite u konzolu jednu rečenicu: `"Oplošje kugle iznosi: ____ m2 odnosno ____ dm2, dok obujam kugle odrezane na pola iznosi __ m3."`. Oplošje i obujam zamijenite s varijablama za svaku izračunatu vrijednost za traženu mjernu jedinicu (m = metri, dm = decimetri) koristeći interpolaciju stringova (template literals).

- Dodajte varijablu za svaku izračunatu vrijednost oplošja i obujma (`oplošje_m2`, `oplošje_dm2`, `obujam_m3` i `pola_obujma_m3`).

- Oplošje: `4πr²`
- Obujam (Volumen): `4/3πr³`

### [TASK=3]
##### [MAX_TASK_POINTS=3]
Odlučili ste provjeriti jeste li ostvarili ciljeve na kraju akademske godine. Koristeći logičke operatore i operatore usporedbe, definirajte varijablu `cilj_ispunjen` koja govori jeste li ispunili cilj na kraju akademske godine (ili niste). Varijabla neka ovisi o podciljevima koje ste si zadali: Da bi krajnji cilj bio ispunjen, moram:

- proći matematiku
- završiti s prosjekom ocjena iznad 4.0.
- napraviti 2 do 4 projekta.
- dobiti Scrimba certifikat iz Pythona ili iz JavaScripta.

Za svaki od danih izraza deklarirajte varijable za ostvarenu vrijednost i ciljanu vrijednost, te boolean varijablu koja će sadržavati rezultat ostvarenja. Na primjer, za drugu izjavu varijable mogu biti: `prosjek_min`, `prosjek`, `podcilj_prosjek_zadovoljen`. Kroz varijable definirajte odgovarajuće logičke izraze/izraze usporedbe za svaki podcilj.

- Na kraju ispišite rezultat u obliku `cilj_ispunjen = podcilj1 && podcilj2 && podcilj3 && podcilj4`, gdje `cilj_ispunjen` na kraju mora biti `true` ili `false`.

### [TASK=4]
##### [MAX_TASK_POINTS=1]
Deklarirajte 3 varijable koje sadrže cjelobrojne vrijednosti. Za svaku varijablu ispišite izjavu u konzolu: `Broj __ je paran - ${parnost_broja}` gdje `__`zamijenite s brojem, a `parnost_broja` s rezultatom provjere parnosti tog broja.

- Primjer: `Broj 50 je paran - true`

### [TASK=5]
##### [MAX_TASK_POINTS=2]
Raspišite sljedeće izraze **bez korištenja** `+=`, `-=`, `*=`, `/=`, `++` ili `--` operatora. Ako smatrate da je potrebno, možete i dodati liniju koda više. (**MAX_TASK_POINTS** = 2)

```javascript
let c = 10;
let d = -1;
c -= d; // Izmijenite izraz
c += d; // Izmijenite izraz
d += 10 + c; // Izmijenite izraz
c *= ++d; // Izmijenite izraz
console.log(c); // 200
console.log(d); // 20
// Izmijenjeni izrazi moraju u konačnici vratiti isti rezultat c i d varijabli kao i originalni izrazi.
// Originalne izraze možete zakomentirati, a ispod njih napisati alternativne izraze (bez korištenja navedenih operatora).
```

# [GROUP=4]
### [TASK=1]
##### [MAX_TASK_POINTS=2] 
Deklarirajte varijable `datum_danas` i `temperatura_C`. U varijablu `datum_danas` spremite današnji datum koristeći `new Date()` objekt, a u varijablu temperatura spremite proizvoljnu vrijednost temperature u Celzijevim stupnjevima (°C). Dodajte novu varijablu `godina` u koju ćete pohraniti trenutnu godinu koristeći `getFullYear()` funkciju nad varijablom `datum_danas`. Sintaksa: `varijabla.getFullYear()`. Definirajte novu varijablu `temperatura_F` u koju ćete pohraniti temperaturu u Farenheitima (°F). Formula za pretvorbu je: `°F = °C * 9/5 + 32`.

- Ispišite u konzolu rečenicu: `"Godina je: __-a, a temperatura je: __F."` koristeći interpolaciju stringova (template literals) sintaksu.
- _Primjer ispisa_: `"Godina je: 2024-a, a temperatura je: 77F."`

### [TASK=2] ##### [MAX_TASK_POINTS=2]
Definirajte konstantu `PI` i dodijelite joj vrijednost broja π (3.14159). Dodajte novu varijablu `radijus` u koju ćete pohraniti proizvoljnu vrijednost radijusa kruga u centimetrima. Ispišite u konzolu jednu rečenicu: `"Opseg kruga je: ____ mm odnosno ____ cm, dok je površina ____ mm2 odnosno ____ dm2."`. Opseg i površinu zamijenite s varijablama za svaku izračunatu vrijednost za traženu mjernu jedinicu (cm = centimetri, dm = decimetri, mm = milimetri) koristeći interpolaciju stringova (template literals).

- Dodajte varijablu za svaku izračunatu vrijednost opsega i površine (`opseg_mm`, `opseg_cm`, `povrsina_mm2` i `povrsina_dm2`).
- Opseg: `2πr`
- Površina: `πr²`

### [TASK=3]
##### [MAX_TASK_POINTS=3]
Odlučili ste provjeriti jeste li ostvarili ciljeve na kraju godine. Koristeći logičke operatore i operatore usporedbe, definirajte varijablu `cilj_ispunjen` koja govori jeste li ispunili cilj na kraju godine (ili niste). Varijabla neka ovisi o podciljevima koje ste si zadali: Da bi krajnji cilj bio ispunjen, moram:

- svaki mjesec pročitati najmanje 3 knjige
- dnevno vježbati najmanje 30 minuta ili prohodati između 5000 i 10 000 koraka.
- uštedjeti minimalno 1000 eura.
- naučiti talijanski ili njemački jezik.

Za svaki od danih izraza deklarirajte varijable za ostvarenu vrijednost i ciljanu vrijednost, te boolean varijablu koja će sadržavati rezultat ostvarenja. Na primjer, za prvu izjavu varijable mogu biti: `procitano_cilj`, `procitano`, `podcilj_citanje`. Kroz varijable definirajte odgovarajuće logičke izraze/izraze usporedbe za svaki podcilj.

- Na kraju ispišite rezultat u obliku `cilj_ispunjen = podcilj1 && podcilj2 && podcilj3 && podcilj4`, gdje `cilj_ispunjen` na kraju mora biti `true` ili `false`.

### [TASK=4]
##### [MAX_TASK_POINTS=1]
Deklarirajte 3 varijable koje sadrže cjelobrojne vrijednosti. Za svaku varijablu ispišite izjavu u konzolu: `Broj __ je paran i veći od 100 - ${logicki_izraz}` gdje `__`zamijenite s brojem, a `logicki_izraz` s odgovarajućim logičkim izrazom.

- Primjer: `Broj 101 je paran i veći od 100 - false`

### [TASK=5]
##### [MAX_TASK_POINTS=2]
Raspišite sljedeće izraze **bez korištenja** `+=`, `-=`, `*=`, `/=`, `++` ili `--` operatora. Ako smatrate da je potrebno, možete i dodati liniju koda više. (**MAX_TASK_POINTS** = 2)

```javascript
let a = 11;
let b = 6;
a -= b; // Izmijenite izraz
a += b; // Izmijenite izraz
b += 10 - a; // Izmijenite izraz
a *= --b; // Izmijenite izraz
console.log(a); // 44
console.log(b); // 4
// Izmijenjeni izrazi moraju u konačnici vratiti isti rezultat c i d varijabli kao i originalni izrazi.
// Originalne izraze možete zakomentirati, a ispod njih napisati alternativni izraz (bez korištenja spomenutih operatora).
```
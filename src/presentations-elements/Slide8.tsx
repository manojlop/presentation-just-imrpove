import React, { useMemo, useState } from 'react';
import {
  FileCode,
  FileText,
  Image as ImageIcon,
  Video,
  BookOpen,
  X,
  Download,
  CheckCircle,
  Link2,
} from 'lucide-react';
import { mockKnowledgeBase } from '../data/mockData';
import { KnowledgeBaseItem } from '../types';

interface ArticleSection {
  title: string;
  description?: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  noteTone?: 'info' | 'warning' | 'success';
}

interface FeaturedKnowledgeArticle extends KnowledgeBaseItem {
  linkedTagIds: string[];
  accent: 'primary' | 'neutral';
  hiddenOnMobile?: boolean;
  cardWidth: string;
  position: React.CSSProperties;
  contextSummary: string;
  detailedDescription: string[];
  sections: ArticleSection[];
}

type FeaturedKnowledgeArticleConfig = Omit<FeaturedKnowledgeArticle, keyof KnowledgeBaseItem>;

const articleDetails: Record<string, FeaturedKnowledgeArticleConfig> = {
  kb1: {
    linkedTagIds: ['T-2025-038'],
    accent: 'primary',
    cardWidth: 'w-[120px] sm:w-[150px] md:w-[190px]',
    position: {
      top: '8%',
      left: '2%',
      animationDelay: '0s',
      '--duration': '6s',
      '--rotation': '-3deg',
    } as React.CSSProperties,
    contextSummary:
      'Osnovni referentni SOP za CNC kvarove, posebno kada maintenance tag ukazuje na curenje ulja, porast temperature, neuobičajenu buku ili pad pouzdanosti opreme.',
    detailedDescription: [
      'Ovaj SOP je centralni servisni dokument za CNC opremu i postoji da maintenance tim ne rešava problem samo lokalno, već kroz disciplinovan pregled cele mašine. Kada se otvori tag sa simptomima kao što su curenje ulja, nestabilan rad, porast temperature ili neuobičajena buka, dokument daje širi okvir razmišljanja i sprečava da intervencija ostane samo na hitnom gašenju posledice.',
      'Najveća vrednost dokumenta je u tome što povezuje svakodnevno održavanje sa dugoročnom pouzdanošću mašine. On podseća tim da veliki kvarovi retko nastaju iznenada. Najčešće im prethode mali simptomi koji su nedeljama ili mesecima zanemarivani jer mašina još uvek “nekako radi”. Ovaj SOP pomaže da se takvi obrasci prepoznaju pre nego što prouzrokuju ozbiljan zastoj.',
      'Dokument je posebno koristan kada tim treba da razlikuje lokalni kvar od znaka sistemskog habanja. Ako se zameni samo jedan zaptivač ili jedna spojnica, a ne proveri stanje podmazivanja, filtera, pomoćnih sistema i osnovnih kalibracija, verovatnoća ponovljenog problema ostaje visoka. Zato SOP ne daje samo listu aktivnosti, već i logiku njihovog redosleda.',
      'Sa stanovišta organizacije znanja, ovo je dokument koji čuva iskustvo iskusnih tehničara i prenosi ga ljudima koji tek ulaze u ozbiljniji maintenance rad. Umesto da svaki novi član tima uči metodom pokušaja i greške, ovde dobija obrazac kako da posmatra mašinu: od osnovne čistoće i podmazivanja, preko mehaničkih i električnih provera, pa sve do godišnjih zahvata i OEM smernica.',
      'U praksi, ovaj unos je jedan od najvažnijih mostova između prijavljenog taga i kvalitetnog servisnog odlučivanja. On ne rešava kvar umesto tima, ali pomaže da tim problemu priđe metodično, sa manje improvizacije i sa većom verovatnoćom da mašina bude vraćena u stabilan rad bez brzog ponavljanja istog simptoma.',
    ],
    sections: [
      {
        title: 'Svrha i primena',
        paragraphs: [
          'Ovaj dokument se koristi za redovni pregled, planski servis i prvu korektivnu intervenciju na CNC mašini kada postoji sumnja na mehaničko, hidrauličko ili termičko odstupanje. Primena dokumenta je obavezna kada je otvoren maintenance tag, kada mašina ima neuobičajenu buku, trag ulja, porast temperature ili pad kvaliteta obrade.',
          'Cilj dokumenta nije samo da mašinu vrati u rad, već da tehničar proveri uzrok, potvrdi stabilnost rada i ostavi jasan trag šta je pregledano, šta je zamenjeno i pod kojim uslovima je mašina puštena nazad u proizvodnju.',
        ],
      },
      {
        title: 'Postupak pregleda i servisa',
        bullets: [
          '1. Zaustaviti mašinu kontrolisano, primeniti LOTO i potvrditi da nema rotacije vretena, kretanja osa ni zaostale energije pre otvaranja zone rada.',
          '2. Zabeležiti simptom zbog kog je otvoren tag: lokaciju curenja, vreme kada se problem pojavio, aktivni program, vrstu alata, poslednju intervenciju i eventualnu promenu zvuka ili vibracije.',
          '3. Vizuelno pregledati radni prostor, vođice, područje vretena, kućišta, spojeve i podlogu ispod mašine kako bi se razlikovao stari trag od aktivnog curenja ili svežeg zaprljanja.',
          '4. Proveriti nivo i stanje ulja, rashladne tečnosti i maziva; uporediti sa referentnim oznakama i zabeležiti svaki pad nivoa ili promenu boje, mirisa i prisustva opiljaka.',
          '5. Pregledati hidraulične i pneumatske vodove, zaptivače, brze spojnice, filtere i mesta povišene vibracije; svako sumnjivo mesto obeležiti pre rastavljanja.',
          '6. Proveriti stanje alata, držača alata, prihvatnih površina, stezanja i eventualnih tragova habanja koji mogu izazvati vibracije, nepreciznost ili dodatno curenje.',
          '7. Pregledati električne konektore, senzore vrata, sigurnosne prekidače i indikatore alarma ako je kvar povezan sa nepravilnim zaustavljanjem ili blokadom rada.',
          '8. Izvršiti neophodnu korektivnu radnju: zatezanje spoja, zamenu zaptivača, čišćenje filtera, dopunu ili zamenu ulja, zamenu oštećene spojnice ili planiranje dubljeg servisa.',
          '9. Očistiti zonu intervencije, ukloniti servisni otpad i pripremiti mašinu za probni rad tako da eventualno novo curenje ili odstupanje bude jasno vidljivo.',
          '10. Pokrenuti kontrolisani probni ciklus bez punog opterećenja, zatim ciklus pod nominalnim uslovima i potvrditi da nema novog traga ulja, pregrevanja, vibracije ni alarmnih poruka.',
        ],
      },
      {
        title: 'Kontrolna lista pre puštanja u rad',
        bullets: [
          'Potvrđen uklonjen uzrok prijavljenog simptoma, a ne samo obrisana posledica ili privremeno sanirano curenje.',
          'Nivoi ulja, maziva i rashladne tečnosti vraćeni u dozvoljeni opseg i upisani u servisni zapisnik.',
          'Sve zaštite, poklopci, senzori vrata i sigurnosni elementi vraćeni na mesto i funkcionalno provereni.',
          'Zona rada očišćena tako da su vođice, zaptivne površine, spojevi i pod oko mašine pregledni za narednu smenu.',
          'Probni rad bez materijala i probni rad sa opterećenjem izvedeni bez alarma, neuobičajene buke, vibracije ili curenja.',
          'Operater ili vođa smene upoznati sa izvršenom intervencijom, mogućim tačkama nadzora i očekivanim ponašanjem mašine u prvoj seriji posle servisa.',
        ],
      },
      {
        title: 'Kada eskalirati servis',
        bullets: [
          'Ako se curenje ponovi u probnom radu ili u prvoj smeni nakon intervencije.',
          'Ako je u ulju prisutan metalni talog, pena, pregoreli miris ili nagla promena boje.',
          'Ako postoji porast temperature vretena, vibracija alata ili pad kvaliteta obrade posle zatvaranja kvara.',
          'Ako je za pristup kvaru potrebno rastavljanje sklopa za koje lokalni tim nema rezervni deo, specijalni alat ili odobrenje.',
          'Ako sigurnosni lanac, vrata, senzori ili LOTO tačke ne mogu biti potvrđeni kao potpuno ispravni pre puštanja mašine u rad.',
        ],
        note: 'Važno: ne koristiti vazdušni pištolj za izduvavanje strugotina u kritičnim zonama, jer može potisnuti nečistoću u ležajeve, vođice i zaptivne površine.',
        noteTone: 'warning',
      },
    ],
  },
  kb6: {
    linkedTagIds: ['T-2025-051'],
    accent: 'neutral',
    hiddenOnMobile: true,
    cardWidth: 'w-[180px]',
    position: {
      top: '14%',
      left: '32%',
      animationDelay: '1.5s',
      '--duration': '7s',
      '--rotation': '2deg',
    } as React.CSSProperties,
    contextSummary:
      'Checklist za kvalitet koristi se kada improvement predlog utiče na standard rada, raspored operacija ili način provere izlaznog kvaliteta na liniji.',
    detailedDescription: [
      'Ova checklist je knowledge-base dokument za sve situacije u kojima se improvement predlog testira u realnom proizvodnom okruženju. Njena svrha nije da uspori promenu, već da obezbedi da svaka promena bude proverena kroz kvalitet proizvoda, a ne samo kroz brzinu procesa ili percepciju operatera da je “sada lakše”.',
      'U proizvodnji je veoma čest obrazac da tim prepozna dobru improvement ideju, brzo promeni raspored rada ili tok operacija, a tek kasnije primeti da su se pojavila nova sitna odstupanja u kvalitetu. Ova lista sprečava upravo tu grešku. Umesto oslanjanja na utisak, uvodi jasan set kontrolnih tačaka koje se proveravaju tokom pilot promene i neposredno posle nje.',
      'Dokument daje i menadžmentu i timu na liniji isti okvir za donošenje odluke. Menadžment kroz njega vidi da improvement nije sproveden naslepo, već pod kontrolisanim uslovima. Tim na liniji dobija alat koji jasno kaže šta mora da bude provereno, ko proverava i kako se rezultat beleži.',
      'Velika vrednost ovog unosa je i u tome što čuva istoriju. Kada organizacija kasnije želi da razume zašto je neka promena uspela ili zašto je odbijena, upravo ova checklist daje dokaz kroz nalaze po smeni, seriji i operateru. Tako knowledge base ne sadrži samo ideju, već i realan trag njene validacije.',
      'Zbog toga se ovaj dokument koristi ne samo kao pomoćni papir u pilot fazi, već kao ključni dokaz da je improvement promena kvalitetno proverena i spremna za standardizaciju.',
    ],
    sections: [
      {
        title: 'Svrha i kada se checklist koristi',
        paragraphs: [
          'Ovaj dokument se koristi tokom pilot promene procesa, reorganizacije radnih stanica ili promene standarda rada kada postoji potreba da se dokaže da unapređenje ubrzava protok bez narušavanja kvaliteta proizvoda. Checklist prati stanje pre promene, ponašanje procesa tokom pilota i odluku da li promena može da postane standard.',
          'Dokument popunjava quality predstavnik ili vođa pilot aktivnosti zajedno sa operaterom smene. Obavezno se koristi kroz više serija i najmanje dve smene kako rezultat ne bi bio donet na osnovu izolovanog dobrog ili lošeg slučaja.',
        ],
      },
      {
        title: 'Tok validacije improvement promene',
        bullets: [
          '1. Definisati šta se menja u procesu, koji je očekivani benefit i koji se KPI meri: vreme ciklusa, vreme prelaza, broj čekanja, broj intervencija ili kvalitet izlaza.',
          '2. Zabeležiti bazno stanje pre promene: najmanje tri reprezentativne serije sa brojem komada, trajanjem ciklusa, scrap-om, korekcijama i komentarima operatera.',
          '3. Potvrditi da su merni alati, senzori i quality tačke validni pre početka pilota kako kasniji rezultat ne bi bio posledica lošeg merenja.',
          '4. Uvesti pilot promenu u kontrolisanom obimu i zapisati tačno vreme početka, smenu, učesnike i privremene instrukcije date operaterima.',
          '5. Tokom svake serije proveriti definisane CTQ tačke: izgled proizvoda, zatvaranje, pozicioniranje etikete, masu, dimenziju, integritet pakovanja ili drugi relevantan kriterijum.',
          '6. Svako odstupanje odmah klasifikovati kao kritično, veliko ili malo i zabeležiti da li je vezano za sam proces, za naviku operatera ili za podešavanje opreme.',
          '7. Posle svake serije uporediti vreme ciklusa i kvalitet sa baznim stanjem, a ne samo sa prethodnom serijom pilot faze.',
          '8. Na kraju smene sakupiti komentar operatera, quality predstavnika i vođe smene o tome gde promena pomaže, a gde uvodi novu nestabilnost.',
          '9. Posle planiranog obima pilota doneti odluku: standardizovati promenu, nastaviti dodatni pilot sa korekcijama ili zaustaviti predlog.',
        ],
      },
      {
        title: 'Kontrolna lista po seriji i po smeni',
        bullets: [
          'Proveren prvi komad nakon uvođenja promene i potvrđeno da zadovoljava definisane quality kriterijume.',
          'Evidentirano vreme početka i završetka serije, broj proizvedenih komada i broj zaustavljanja linije.',
          'Proverena vizuelna usklađenost proizvoda i ambalaže bez novih ogrebotina, deformacija, neporavnanja ili lošeg zatvaranja.',
          'Upoređen broj intervencija operatera pre i posle promene, uključujući dodatna kretanja, čekanja i ručne korekcije.',
          'Zabeležen svaki near-miss ili bezbednosni kompromis uveden novim rasporedom rada.',
          'Potvrđeno da promena ne povećava opterećenje jedne stanice do nivoa koji uvodi novi zastoj ili grešku.',
          'Svi nalazi označeni po smeni, operateru, seriji i vremenu kako bi retrospektiva imala jasan trag.',
        ],
      },
      {
        title: 'Kriterijumi za prihvatanje ili stop',
        bullets: [
          'Promena može biti prihvaćena samo ako istovremeno smanjuje gubitak vremena i ne pogoršava kvalitet, bezbednost ili ergonomiju rada.',
          'Ako se isti kvalitetni problem ponovi u dve uzastopne serije, pilot se zaustavlja dok se ne utvrdi uzrok.',
          'Ako su rezultati dobri samo u jednoj smeni ili kod jednog operatera, promena se ne standardizuje dok se ne potvrdi ponovljivost.',
          'Ako se benefit meri samo kroz subjektivan utisak, a ne kroz zapisane podatke, rezultat se smatra nepotpunim.',
          'Finalna odluka mora da sadrži: očekivani benefit, rizike koji ostaju, potrebne korekcije standarda i datum ponovne provere posle implementacije.',
        ],
        note:
          'Bez uporednog merenja pre i posle promene nema validne improvement odluke. Checklist nije formalnost, već dokaz da je promena proverena pod stvarnim uslovima rada.',
        noteTone: 'success',
      },
    ],
  },
  kb5: {
    linkedTagIds: ['T-2025-038'],
    accent: 'neutral',
    hiddenOnMobile: true,
    cardWidth: 'w-[180px]',
    position: {
      top: '14%',
      right: '32%',
      animationDelay: '0.8s',
      '--duration': '6.5s',
      '--rotation': '-2deg',
    } as React.CSSProperties,
    contextSummary:
      'Tehnički dijagram daje maintenance timu brz uvid u tačke curenja, spojeve i komponente hidrauličkog sklopa kada tag ukazuje na ulje ili pad performansi sistema.',
    detailedDescription: [
      'Ovaj dijagram je radni dokument za dijagnostiku i služi da maintenance tim ne traži kvar nasumično. Kada operater prijavi curenje ulja, trag koji se vidi na podu ili kućištu često nije stvarni izvor problema. Zbog toga je timu potrebna tehnička mapa sistema koja povezuje vizuelni simptom sa logikom hidrauličkog sklopa.',
      'Dokument ubrzava pregled jer tehničaru omogućava da razume kako su vodovi, ventili, povratne linije i zaptivne tačke funkcionalno povezani. Bez toga tim lako ulazi u zonu pokušaja i greške, što povećava vreme zastoja i rizik da se rastavi deo sistema koji nije uzrok problema.',
      'Dijagram takođe uvodi zajednički jezik između operatera, vođe smene i maintenance tima. Kada svi koriste isti prikaz, mnogo je lakše zabeležiti gde je pregled izvršen, koja tačka je potvrđena kao kritična i gde je uočena stvarna promena stanja.',
      'Na duži rok, ovakav dokument pomaže organizaciji da prepozna koje tačke na sistemu najčešće otkazuju i gde postoji potreba za jačim preventivnim planom. To znači da nije koristan samo tokom jedne intervencije, već i u analizi trendova održavanja.',
      'Zbog toga je ovaj unos jedan od najvažnijih tehničkih elemenata baze znanja za hidrauličke probleme: on direktno pretvara kompleksan sistem u nešto što tim može planski i brzo da proveri.',
    ],
    sections: [
      {
        title: 'Svrha i način korišćenja dijagrama',
        paragraphs: [
          'Dijagram se koristi kao radni dokument tokom dijagnostike hidrauličkog kvara, naročito kada trag ulja ne pokazuje jasno izvor problema. Njegova svrha je da tehničar prati logiku sistema od rezervoara i pumpe do ventila, cilindara i povratnih vodova, umesto da proverava komponente nasumično.',
          'Pre početka rada potrebno je na dijagramu označiti oblast u kojoj je simptom primećen i upisati radni režim u kome se problem javio. Time dokument postaje zapis stvarne intervencije, a ne samo tehnička slika sistema.',
        ],
      },
      {
        title: 'Redosled dijagnostike curenja',
        bullets: [
          '1. Potvrditi bezbednu izolaciju sistema i rasterećenje pritiska pre dodirivanja vodova, ventila ili zaptivnih mesta.',
          '2. Na dijagramu označiti zonu u kojoj je primećen trag ulja i uporediti je sa najbližim komponentama iznad i uzvodno od tog mesta.',
          '3. Proveriti da li trag odgovara dovodnoj, povratnoj ili drenažnoj liniji kako bi se suzio skup verovatnih uzroka.',
          '4. Vizuelno pregledati spojnice, holendere, zaptivače, priključke na cilindru i kućišta ventila u redosledu kojim ih dijagram povezuje.',
          '5. Ako nema jasnog izvora, očistiti sumnjive zone, vratiti sistem u kontrolisani rad i pratiti pojavu svežeg traga pod malim opterećenjem.',
          '6. Proveriti nivo ulja, stanje filtera i eventualan pad performansi sistema koji može ukazivati da curenje nije samo spoljašnje već i funkcionalno.',
          '7. Uporediti nalaz sa prethodnim intervencijama na istoj grani sistema kako bi se utvrdilo da li postoji tačka ponovljenog otkaza.',
          '8. Tek nakon potvrde izvora rastaviti komponentu ili planirati zamenu dela; rastavljanje bez potvrde izvora nije dozvoljeno.',
        ],
      },
      {
        title: 'Tačke koje moraju biti potvrđene',
        bullets: [
          'Da li je izvor curenja stvarno aktivan ili je u pitanju zaostali trag stare intervencije.',
          'Da li je došlo do popuštanja spoja, oštećenja zaptivača, abrazije creva ili pukotine na kućištu komponente.',
          'Da li je pritisak sistema u dozvoljenom opsegu ili povišen pritisak ubrzava ponovno curenje.',
          'Da li vibracija, poravnanje ili mehaničko opterećenje utiču na kritičnu tačku curenja.',
          'Da li je posle korektivne radnje sistem vraćen u čisto stanje kako bi novo curenje moglo odmah da se uoči.',
        ],
      },
      {
        title: 'Kriterijumi zatvaranja i eskalacija',
        bullets: [
          'Kvar se može zatvoriti tek kada je izvor curenja potvrđen, korigovan i provereno da se ne ponavlja u probnom radu.',
          'Ako se trag pojavljuje na više grana sistema ili izvor nije moguće potvrditi bez većeg rastavljanja, intervencija se eskalira senior maintenance tehničaru.',
          'Ako je prisutan pad pritiska, spor odziv cilindra ili zagrevanje ulja, problem se tretira kao sistemski i ne zatvara se samo zamenom zaptivača.',
          'Sve promene moraju biti unete na servisni zapis sa oznakom tačke sa dijagrama i opisom izvršene korekcije.',
        ],
        note:
          'Trag ulja se često pojavi niže od realnog izvora curenja. Dijagram treba koristiti zajedno sa vizuelnim pregledom i proverom pod opterećenjem, a ne kao jedini dokaz.',
        noteTone: 'warning',
      },
    ],
  },
  kb3: {
    linkedTagIds: ['T-2025-042'],
    accent: 'neutral',
    cardWidth: 'w-[120px] sm:w-[150px] md:w-[190px]',
    position: {
      top: '8%',
      right: '2%',
      animationDelay: '2s',
      '--duration': '7.5s',
      '--rotation': '3deg',
    } as React.CSSProperties,
    contextSummary:
      'Video obuka za bezbednost pomaže timovima da razumeju zašto su zaštitne ograde, blokade i prijava odstupanja kritični za bezbedan rad uz mašine.',
    detailedDescription: [
      'Ovaj video dokument postoji da bezbednosna pravila ne ostanu samo napisana, već da ih ljudi stvarno razumeju i prepoznaju u svom radu. Kada nedostaje zaštitna ograda ili postoji drugi bezbednosni rizik, tehnička intervencija sama po sebi nije dovoljna ako operateri i vođe smena nemaju isti osećaj za ozbiljnost situacije.',
      'Za razliku od klasičnog SOP-a, video prenosi i proceduralno i ponašajno znanje. On pokazuje kako izgleda rizična situacija, kada operater treba da zastane, kako da prijavi problem i zašto improvizacija ne sme da zameni standardno bezbednosno rešenje.',
      'Dokument je posebno važan posle bezbednosnog taga, jer organizaciji pomaže da problem ne zatvori samo fizičkom korekcijom. Ako se ponašanje ljudi ne promeni, isti obrazac može se lako ponoviti u drugoj smeni ili na drugoj mašini.',
      'Video je izuzetno koristan i u onboardingu. Novi operateri mnogo brže usvajaju standard kada ga vide kao stvarnu situaciju, a ne samo kao usmeno objašnjenje ili tekstualno pravilo.',
      'U tom smislu, ovaj dokument čuva bezbednosnu kulturu organizacije i pomaže da znanje o riziku postane zajedničko, a ne prepušteno ličnom iskustvu pojedinaca.',
    ],
    sections: [
      {
        title: 'Obavezni tok obuke posle safety taga',
        paragraphs: [
          'Ovaj dokument prati video obuku i definiše kako se bezbednosno znanje prenosi operaterima, vođama smene i maintenance timu posle prijavljenog rizika. Koristi se obavezno kada nedostaje zaštitna ograda, kada je blokada zaobiđena, kada postoji near-miss ili kada je otvoren safety tag koji može dovesti do povrede.',
          'Cilj obuke je da svaki učesnik zna kada mora da zaustavi rad, kome prijavljuje problem, kako proverava da li je zaštitni element funkcionalan i zašto improvizacija nije prihvatljiva zamena za standardno rešenje.',
        ],
      },
      {
        title: 'Postupanje operatera u zoni mašine',
        bullets: [
          '1. Pre početka smene proveriti da su sve zaštitne ograde, vrata, svetlosne zavese i prekidači fizički prisutni i neoštećeni.',
          '2. Ne pokretati opremu ako bilo koja zaštita nedostaje, ako ne naleže pravilno ili ako daje nejasan signal o položaju.',
          '3. Ako se zaštita mora otvoriti radi čišćenja ili podešavanja, primeniti definisani stop i pratiti LOTO proceduru kad god postoji rizik od neočekivanog starta.',
          '4. Nikada ne premošćavati senzor, blokadu ili zaštitna vrata da bi se proces ubrzao ili “samo kratko proverio”.',
          '5. Svako bezbednosno odstupanje odmah fotografisati, otvoriti tag i obavestiti vođu smene pre nego što mašina nastavi rad.',
          '6. Ako postoji i najmanja sumnja da je radno okruženje nesigurno, operater ima obavezu da zaustavi rad i sačeka potvrdu odgovornog lica.',
          '7. Posle korektivne radnje obavezno proveriti da li zaštitni element zaista sprečava rad kada je otvoren ili uklonjen.',
        ],
      },
      {
        title: 'Provera razumevanja posle obuke',
        bullets: [
          'Svaki učesnik mora usmeno objasniti kada je obavezan stop rada i koja je razlika između operativnog zastoja i bezbednosnog zastoja.',
          'Vođa smene proverava da operater ume da pokaže gde se prijavljuje safety tag i koje informacije mora da unese u prijavu.',
          'Maintenance tehničar potvrđuje da razume kako se testira funkcija zaštite posle intervencije i kako se dokumentuje povratak u bezbedno stanje.',
          'Ako učesnik obuke ne može jasno da opiše postupak prijave i stop kriterijume, obuka se ponavlja pre sledeće smene.',
        ],
      },
      {
        title: 'Kada se rad obavezno zaustavlja',
        bullets: [
          'Kada zaštitna ograda, vrata ili sigurnosna blokada nedostaju ili ne reaguju prema očekivanju.',
          'Kada je primećeno da je bilo koji sigurnosni element premošćen, improvizovan ili privremeno vezan van standarda.',
          'Kada operater ne može da potvrdi bezbedan pristup zoni rada tokom čišćenja, podešavanja ili otklanjanja manjeg zastoja.',
          'Kada posle intervencije nije sproveden test funkcionalnosti zaštite u prisustvu odgovorne osobe.',
        ],
        note:
          'Video obuka nije završena samim gledanjem materijala. Završena je tek kada smena može da pokaže ispravno ponašanje i da bez oklevanja zaustavi rad u rizičnoj situaciji.',
        noteTone: 'success',
      },
    ],
  },
  kb4: {
    linkedTagIds: ['T-2025-038'],
    accent: 'neutral',
    hiddenOnMobile: true,
    cardWidth: 'w-[180px]',
    position: {
      top: '38%',
      left: '2%',
      animationDelay: '0.5s',
      '--duration': '8s',
      '--rotation': '-4deg',
    } as React.CSSProperties,
    contextSummary:
      'Operativno uputstvo za zamenu alata relevantno je kada maintenance rad zahteva sigurno skidanje i vraćanje komponenti tokom intervencije na mašini.',
    detailedDescription: [
      'Ovo uputstvo je operativni dokument, ali je posebno važno u maintenance kontekstu kada servis zahteva rukovanje alatom, držačima ili zonom preciznih komponenti. U takvim situacijama sama popravka nije jedini rizik. Novi problem često nastaje tokom rastavljanja ili sastavljanja ako alat nije pravilno skinut, pregledan i vraćen.',
      'Dokument uvodi standardizovan redosled rada: bezbedno zaustavljanje, proveru mirovanja, otvaranje držača, rukovanje alatom, pregled prihvatnih površina i funkcionalnu proveru pre starta. Tako se smanjuje mogućnost da intervencija zbog jednog kvara napravi dodatno odstupanje.',
      'Posebno je važan kada prvobitni problem već stvara pritisak da se mašina vrati u rad što pre. Baš u toj situaciji ljudi najlakše preskoče detalje koji kasnije proizvedu vibracije, nepreciznost ili novo oštećenje.',
      'Dokument takođe pomaže da operacija i maintenance rade po istom standardu. Kada svi koriste isti tok rada, mnogo je lakše razumeti šta je tačno urađeno i da li je mašina vraćena pod istim uslovima kao pre intervencije.',
      'Zbog toga ovaj unos ima vrednost daleko veću od same zamene alata: on čuva kvalitet intervencije i sprečava da hitno rešavanje jednog problema stvori sledeći.',
    ],
    sections: [
      {
        title: 'Priprema za zamenu alata',
        paragraphs: [
          'Dokument se koristi pri planskoj zameni alata, korekciji posle loma alata ili tokom maintenance intervencije koja zahteva skidanje držača i pristup zoni vretena. Pre rada mora biti potvrđeno da je odgovarajući alat spreman, da je mašina bezbedno zaustavljena i da postoji dovoljan pristup zoni rada bez improvizacije.',
          'Priprema obuhvata pregled radnog naloga, identifikaciju alata koji se menja, proveru da li je novi alat kompatibilan i obezbeđivanje čistih prihvatnih površina, odgovarajućeg pribora i zaštitne opreme.',
        ],
      },
      {
        title: 'Postupak zamene alata korak po korak',
        bullets: [
          '1. Zaustaviti mašinu kroz standardni stop, sačekati potpuno mirovanje vretena i primeniti LOTO ako postoji mogućnost neočekivanog pokretanja.',
          '2. Očistiti spoljašnji deo zone alata pre otvaranja kako nečistoća ne bi ušla na prihvatne i zaptivne površine.',
          '3. Identifikovati alat i držač koji se skidaju, uporediti ih sa radnim nalogom i zabeležiti položaj ako postoji rizik od pogrešnog vraćanja.',
          '4. Otpustiti stezanje prema propisanom redosledu, bez udaraca i bez nasilnog izvlačenja komponente.',
          '5. Pregledati alat, konus, držač, navojne i kontaktne površine na tragove habanja, ogrebotina, deformacija ili ulja koje ne pripada toj zoni.',
          '6. Očistiti i po potrebi zameniti oštećene elemente; nikada ne vraćati alat sa vidljivim oštećenjem ili zaprljanjem prihvatne površine.',
          '7. Postaviti novi ili servisirani alat, zategnuti propisanim momentom ili mehanizmom i proveriti pravilno naleganje bez zazora.',
          '8. Ažurirati offsete ili referentne vrednosti ako procedura mašine to zahteva.',
        ],
      },
      {
        title: 'Provera pre nastavka proizvodnje',
        bullets: [
          'Ručno ili u servisnom režimu potvrditi da je alat pravilno prihvaćen i da nema udara, zazora ni neuobičajene buke.',
          'Izvršiti probni ciklus bez komada i pratiti stabilnost vretena, pozicioniranje i odsustvo alarmnih poruka.',
          'Po potrebi obraditi probni komad i potvrditi da su dimenzije i kvalitet obrade u dozvoljenim granicama.',
          'Upisati koji alat je zamenjen, zašto je zamenjen i ko je potvrdio puštanje mašine u rad.',
        ],
      },
      {
        title: 'Stop uslovi i eskalacija',
        bullets: [
          'Ako su konus, držač ili vreteno oštećeni, mašina se ne vraća u rad dok senior tehničar ne potvrdi stanje.',
          'Ako postoji ponovljena vibracija ili loš kvalitet obrade posle zamene, potrebno je proveriti poravnanje, balans alata i stanje steznog mehanizma.',
          'Ako nije moguće potvrditi da je alat pravilno seo na prihvatnu površinu, intervencija se smatra nedovršenom.',
          'Ako je zona alata otvorena zbog kvara koji uključuje ulje ili metalne opiljke, obavezno proširiti pregled i na susedne komponente pre starta.',
        ],
        note:
          'Uz maintenance tag kao što je T-2025-038, ovaj dokument sprečava da intervencija zbog curenja ulja preraste u novi problem izazvan nepravilnim rukovanjem u zoni alata.',
        noteTone: 'info',
      },
    ],
  },
  kb7: {
    linkedTagIds: ['T-2025-038'],
    accent: 'neutral',
    hiddenOnMobile: true,
    cardWidth: 'w-[180px]',
    position: {
      top: '38%',
      right: '2%',
      animationDelay: '2.5s',
      '--duration': '7.2s',
      '--rotation': '4deg',
    } as React.CSSProperties,
    contextSummary:
      'Specijalizovani vodič koristi se kada je iz taga jasno da je problem curenje ulja, pad hidrauličkog pritiska ili drugo odstupanje vezano za zaptivanje sistema.',
    detailedDescription: [
      'Ovaj vodič je specijalizovan za jednu od najčešćih i najskupljih maintenance situacija: curenje ulja na hidrauličkom sistemu. Njegova svrha nije da tehničaru da samo spisak stvari koje treba pogledati, već da ga usmeri kako da razmišlja o problemu i kako da ne zatvori intervenciju pre nego što zaista razume uzrok.',
      'Dokument je dragocen zato što pomaže timu da razlikuje lokalni kvar od znaka šireg habanja. Ako se zameni samo jedan zaptivač, a ne proveri pritisak, poravnanje, vibracija ili opšte stanje sistema, ista prijava može vrlo brzo da se vrati. Ovaj vodič zato strukturira dijagnostiku tako da tim dobije širu sliku, a ne samo trenutno rešenje.',
      'U proizvodnoj realnosti, curenje ulja nije samo tehnički problem. Ono uvodi rizik od zastoja, klizavih površina, zaprljanja opreme i mogućeg većeg kvara ako mašina nastavi da radi predugo. Dokument zato daje dubinu koja pomaže i tehničaru i vođi smene da procene hitnost situacije.',
      'Vodič je važan i posle intervencije, jer pomaže da se uzrok i nalaz zapišu na način koji koristi sledećoj prijavi. Tako knowledge base ne ostaje skup opštih saveta, već postaje realna istorija učenja iz kvarova.',
      'U tom smislu, ovaj dokument spaja brzinu intervencije sa tehničkom disciplinom i značajno smanjuje verovatnoću da se problem zatvori površno.',
    ],
    sections: [
      {
        title: 'Brza procena i obezbeđenje zone',
        paragraphs: [
          'Ovaj dokument se koristi odmah po prijavi curenja ulja da bi se procenilo da li je potreban hitan stop, da bi se zaštitilo radno mesto i da bi se sprečilo da trag ulja prikrije stvarni uzrok kvara. Prvi cilj nije popravka, već bezbedna stabilizacija situacije.',
          'Pre dijagnostike potrebno je obezbediti klizavu zonu, sprečiti nastavak proizvodnje ako postoji rizik po ljude ili opremu i proveriti da li curenje utiče na pritisak, performanse ili bezbednost mašine.',
        ],
      },
      {
        title: 'Dijagnostika korak po korak',
        bullets: [
          '1. Fotografisati trag ulja pre čišćenja i zabeležiti da li je problem prijavljen tokom rada, mirovanja ili nakon prethodne intervencije.',
          '2. Proveriti količinu i rasprostranjenost traga kako bi se razlikovalo kapanje od aktivnog curenja pod pritiskom.',
          '3. Potvrditi nivo ulja i proveriti da li postoji alarm, spor odziv sistema, pad pritiska ili promena zvuka pumpe.',
          '4. Očistiti sumnjivu zonu i pregledati najverovatnije izvore: spojnice, zaptivače, creva, filter kućišta, ventile i priključke na cilindru.',
          '5. Koristiti hidraulički dijagram za proveru uzvodnih tačaka kada trag ulja nije u ravni sa stvarnim izvorom curenja.',
          '6. Vratiti sistem u kratki probni rad pod kontrolisanim uslovima i pratiti gde se prvi put pojavljuje svež trag.',
          '7. Potvrditi da li je uzrok lokalni kvar komponente, habanje usled vibracije, pogrešan pritisak, zaprljan filter ili sekundarna posledica druge neispravnosti.',
          '8. Izvršiti korektivnu meru i ponoviti probni rad sve dok zona ne ostane suva u definisanom periodu nadzora.',
        ],
      },
      {
        title: 'Potvrda rešenja pre zatvaranja taga',
        bullets: [
          'Zona curenja očišćena i pregledna, bez novih tragova tokom probnog rada i prve kontrole po povratku u proizvodnju.',
          'Nivo ulja stabilan i u granicama, bez potrebe za vanrednom dopunom odmah nakon intervencije.',
          'Nema pada pritiska, kašnjenja u odzivu sistema ni novih alarmnih poruka.',
          'U zapisniku je upisano šta je bio uzrok curenja, koji je deo zamenjen ili korigovan i ko je potvrdio probni rad.',
          'Vođa smene zna koju zonu treba dodatno pratiti u narednoj smeni i kada problem mora ponovo da se eskalira.',
        ],
      },
      {
        title: 'Kada obavezno eskalirati',
        bullets: [
          'Ako se curenje vraća nakon zamene zaptivača ili zatezanja spoja.',
          'Ako postoji istovremeni pad pritiska, zagrevanje sistema ili promena performansi mašine.',
          'Ako curenje potiče iz komponente koja zahteva veće rastavljanje, specijalni alat ili spoljnog servisera.',
          'Ako je ulje dospelo do električnih komponenti, poda po kojem se kreću operateri ili zona koja može izazvati bezbednosni incident.',
        ],
        note:
          'Ako se curenje ponavlja ubrzo nakon zamene zaptivača, potrebno je proveriti poravnanje, pritisak sistema i moguće dublje habanje komponente, a ne zatvarati problem kao izolovan kvar.',
        noteTone: 'warning',
      },
    ],
  },
  kb29: {
    linkedTagIds: ['T-2025-038'],
    accent: 'neutral',
    cardWidth: 'w-[120px] sm:w-[150px] md:w-[190px]',
    position: {
      bottom: '8%',
      left: '2%',
      animationDelay: '1.8s',
      '--duration': '6.8s',
      '--rotation': '2deg',
    } as React.CSSProperties,
    contextSummary:
      'SOP za čišćenje mašine koristi se posle intervencije ili kao deo preventivnog održavanja, naročito kada postoji trag ulja, zaprljanje ili potreba da oprema bude pregledna za narednu proveru.',
    detailedDescription: [
      'Ovaj SOP namerno tretira čišćenje kao tehnički korak, a ne kao kozmetički završetak rada. Ako mašina posle intervencije ostane sa tragovima ulja, nečistoće ili servisnim ostacima, sledeći pregled može dati pogrešnu sliku stanja i otežati rano prepoznavanje novog problema.',
      'Dokument definiše šta mora biti očišćeno, kojim redosledom i sa kojom svrhom. Nije dovoljno samo ukloniti vidljivu mrlju. Potrebno je obezbediti da kritične inspekcijske tačke, pristupne zone i kontaktne površine budu čiste i pregledne.',
      'Posebna vrednost SOP-a je u tome što pomaže budućoj dijagnostici. Kada je mašina pravilno očišćena, svako novo curenje ili odstupanje postaje mnogo očiglednije. To tim štedi vreme i smanjuje rasprave da li je problem zaista nov ili je samo ostao trag stare intervencije.',
      'Dokument ima i bezbednosnu i kvalitetnu dimenziju. Tragovi ulja mogu napraviti klizavu površinu, sakriti pristupne tačke i uticati na bezbednost operatera. Ujedno, zaprljana oprema stvara loš standard rada i otežava pouzdanu procenu spremnosti mašine za rad.',
      'Zato ovaj unos ne opisuje samo “kako obrisati mašinu”, već kako maintenance tim vraća opremu u čisto, bezbedno i pregledno stanje koje podržava naredni ciklus proizvodnje.',
    ],
    sections: [
      {
        title: 'Priprema za čišćenje',
        paragraphs: [
          'Ovaj SOP se koristi po završetku maintenance intervencije, pri redovnom preventivnom održavanju i svaki put kada trag ulja, emulzije ili procesne nečistoće mogu da sakriju novo odstupanje. Pre čišćenja mora biti potvrđeno da je oprema bezbedno zaustavljena i da se ne uklanja dokaz koji je još potreban za dijagnostiku.',
          'Priprema obuhvata fotografisanje stanja pre čišćenja, uklanjanje slobodnog otpada i definisanje redosleda kojim se čiste kritične zone kako bi pregled nakon rada bio pouzdan.',
        ],
      },
      {
        title: 'Postupak čišćenja korak po korak',
        bullets: [
          '1. Isključiti i obezbediti mašinu, postaviti upozorenje da je u toku maintenance/čišćenje i pripremiti odgovarajuće sredstvo za čišćenje i apsorpcioni materijal.',
          '2. Ukloniti rasute opiljke, ambalažni otpad, upijajući papir i druge ostatke koji mogu zadržavati ulje ili sakrivati pristupne tačke.',
          '3. Očistiti pod ispod mašine i pristupne zone tako da više ne postoji rizik od klizanja i da svaki novi trag može odmah da se primeti.',
          '4. Očistiti spoljne površine kućišta, vrata, ručke, komandne zone i mesta na kojima operater dolazi u kontakt sa opremom.',
          '5. Zatim očistiti tehnički kritične zone: spojeve, zaptivne tačke, vođice, pristupne poklopce, nosače i područja oko filtera ili ventila.',
          '6. Ne koristiti agresivan mlaz ili metodu koja može potisnuti nečistoću u ležajeve, senzore ili električne komponente.',
          '7. Po završetku ostaviti zonu suvom i preglednom najmanje onoliko koliko je potrebno da se potvrdi da nema novog izbijanja ulja ili tečnosti.',
        ],
      },
      {
        title: 'Verifikacija i dokumentovanje',
        bullets: [
          'Potvrditi da su sve inspekcijske tačke vidljive i dostupne za narednu proveru.',
          'Vizuelno proveriti da posle čišćenja nije ostala masna površina, klizava staza ili natopljen upijajući materijal.',
          'Fotografisati stanje posle čišćenja kada je intervencija bila vezana za curenje ili veći kvar.',
          'Upisati ko je izvršio čišćenje, koje su zone tretirane i da li je potrebno dodatno praćenje u sledećoj smeni.',
        ],
      },
      {
        title: 'Kada mašina ne sme nazad u rad',
        bullets: [
          'Ako posle čišćenja i dalje postoji svež trag ulja, emulzije ili procesne tečnosti.',
          'Ako zaštitni poklopci, senzori ili pristupne površine nisu vraćeni u standardno stanje.',
          'Ako su pod ili pristupna zona i dalje klizavi ili zaprečeni servisnim materijalom.',
          'Ako mašina nije ostavljena dovoljno preglednom da se novo odstupanje jasno razlikuje od stare intervencije.',
        ],
        note:
          'Pre puštanja mašine u rad potrebno je potvrditi da nema zaostalog ulja, da su zaštite vraćene i da je zona rada bezbedna i pregledna za operatera.',
        noteTone: 'success',
      },
    ],
  },
  kb26: {
    linkedTagIds: ['T-2025-038', 'T-2025-042'],
    accent: 'neutral',
    hiddenOnMobile: true,
    cardWidth: 'w-[180px]',
    position: {
      bottom: '14%',
      left: '32%',
      animationDelay: '0.3s',
      '--duration': '7.8s',
      '--rotation': '-3deg',
    } as React.CSSProperties,
    contextSummary:
      'Dijagram električnog sistema koristan je za bezbednu izolaciju opreme i proveru senzora, blokada i napajanja tokom intervencija na liniji punjenja.',
    detailedDescription: [
      'Ovaj dijagram je centralni knowledge-base dokument za sve intervencije u kojima problem nije čisto mehanički, već uključuje napajanje, sigurnosne krugove, senzore, blokade ili signalizaciju. Bez ovakvog prikaza tim vrlo lako proverava sistem nasumično i troši vreme na posledice umesto na uzrok.',
      'Dokument pomaže da safety i maintenance tim imaju istu tehničku sliku sistema. To je posebno važno kada postoji bezbednosni tag ili sumnja da zaštitni element ne komunicira pravilno sa ostatkom logike mašine.',
      'Velika vrednost dijagrama je i u planiranju bezbedne izolacije. Kada se mašina priprema za servisni rad, nije dovoljno samo isključiti glavni prekidač. Potrebno je razumeti koje tačke ostaju aktivne, gde se proverava odsustvo energije i koji krugovi mogu da stvore lažan osećaj sigurnosti.',
      'U svakodnevnom radu, ovaj dokument skraćuje vreme rešavanja problema sa senzorima i blokadama jer tim može planski da prati put signala i logiku reakcije mašine. Time se smanjuje broj “slepo” izvedenih provera i ubrzava put do uzroka.',
      'Na duži rok, dijagram služi i kao baza za učenje iz ponovljenih problema, jer omogućava da se kvarovi, blokade i intervencije vežu za isti model električne logike i iste kritične tačke.',
    ],
    sections: [
      {
        title: 'Bezbedna izolacija i priprema',
        paragraphs: [
          'Dijagram električnog sistema koristi se pre svake intervencije koja uključuje napajanje, sigurnosni lanac, zaštitne senzore, svetlosne zavese ili vrata na liniji punjenja. Prvi korak nije traženje kvara, već potvrda gde se sistem bezbedno izoluje i na kojim tačkama se proverava odsustvo energije.',
          'Tehničar pre rada na dijagramu obeležava glavni dovod, pomoćna napajanja, bezbednosne petlje i senzore koji učestvuju u problemu. Time dokument postaje vodič kroz intervenciju i zapis tačno proverene putanje signala.',
        ],
      },
      {
        title: 'Provera sigurnosnog lanca i signala',
        bullets: [
          '1. Isključiti glavno napajanje prema proceduri i potvrditi odsustvo energije na svim relevantnim tačkama definisanim u dijagramu.',
          '2. Proveriti da li postoje pomoćna napajanja ili sekundarni krugovi koji ostaju aktivni i koji mogu dati lažan osećaj da je sistem bezbedan.',
          '3. Identifikovati sigurnosni lanac koji uključuje vrata, blokade, stop tastere, releje bezbednosti i kontroler linije.',
          '4. Pratiti signal od zaštitnog elementa do ulaza kontrolera i potvrditi gde se signal gubi, kasni ili ostaje u pogrešnom stanju.',
          '5. Za svaki sumnjiv senzor proveriti fizički položaj, mehaničko oštećenje, konektor, napajanje i povratni signal prema dijagramu.',
          '6. Posle zamene ili korekcije ponoviti test funkcionalnosti u realnom redosledu rada sistema.',
        ],
      },
      {
        title: 'Tok dijagnostike električnog kvara',
        bullets: [
          'Ne preskakati direktno na zamenu dela bez potvrde da signal zaista izostaje na toj tački.',
          'Uporediti stanje signala sa očekivanim uslovom rada: vrata zatvorena, zaštita aktivna, senzor pokriven ili otkriven, motor u stop režimu.',
          'Ako je problem povremen, proveru izvršiti i u uslovima vibracije, zatvaranja vrata i realnog toka proizvoda kroz liniju.',
          'Kod ponovljenih safety problema proveriti i mehanički razlog lošeg očitavanja: pomeren nosač, loše naleganje vrata ili zaprljan senzor.',
          'Svaku proverenu tačku evidentirati redosledom sa dijagrama kako bi sledeća intervencija mogla da nastavi od potvrđenog nalaza.',
        ],
      },
      {
        title: 'Kriterijumi završetka i eskalacija',
        bullets: [
          'Linija se vraća u rad tek kada je potvrđeno pravilno ponašanje svih zaštitnih elemenata koji učestvuju u problemu.',
          'Ako odsustvo energije nije moguće jednoznačno potvrditi, intervencija se prekida i eskalira elektroodržavanju ili odgovornom za bezbednost.',
          'Ako signal prolazi ispravno, a sistem i dalje reaguje nepredvidivo, eskalirati PLC/automatika timu uz zapis tačno proverene putanje.',
          'Posle intervencije obavezno sprovesti funkcionalni test u prisustvu odgovornog lica i uneti rezultat u zapisnik.',
        ],
        note:
          'Dokument je naročito vredan kada problem nije samo mehanički, već uključuje blokade, signalizaciju ili sigurnosni lanac koji određuje da li mašina sme da radi.',
        noteTone: 'warning',
      },
    ],
  },
  kb27: {
    linkedTagIds: ['T-2025-051'],
    accent: 'neutral',
    hiddenOnMobile: true,
    cardWidth: 'w-[180px]',
    position: {
      bottom: '14%',
      right: '32%',
      animationDelay: '1.2s',
      '--duration': '6.2s',
      '--rotation': '3deg',
    } as React.CSSProperties,
    contextSummary:
      'Uputstvo za kalibraciju opreme pomaže kada procesna poboljšanja zahtevaju novu referentnu tačnost, stabilnije merenje i potvrdu da promena nije narušila standard rada.',
    detailedDescription: [
      'Ovo uputstvo je ključno za sve improvement situacije u kojima organizacija želi da odluku zasnuje na podacima, a ne na utisku. Kada se menja raspored rada, ritam procesa ili način merenja performansi, lako je prevideti da senzori i referentne tačke više ne rade pod istim uslovima kao ranije.',
      'Dokument zato kalibraciju tretira kao deo validacije promene, a ne kao formalnost. Tek kada su merni elementi provereni i rezultati stabilni, tim može sa sigurnošću da zaključi da promena stvarno donosi poboljšanje.',
      'Posebno je važan u procesima gde mala odstupanja menjaju zaključak. Netočan senzor može dati utisak da je vreme ciklusa bolje, da je kvalitet stabilniji ili da su gubici manji, iako je u pitanju samo greška u merenju.',
      'Dokument pomaže i quality timu i operaciji jer uvodi zajedničku disciplinu oko toga kako se proverava pouzdanost podataka. Time improvement projekti postaju ozbiljniji i lakše odbranjivi pred menadžmentom.',
      'Na duži rok, ovaj unos sprečava da organizacija standardizuje promenu koja izgleda uspešno samo zato što merni sistem nije pravilno proveravan. Zato ovaj dokument ima stratešku, a ne samo tehničku vrednost.',
    ],
    sections: [
      {
        title: 'Preduslovi i referentne vrednosti',
        paragraphs: [
          'Dokument se koristi kada improvement projekat menja raspored rada, ritam procesa ili uslove u kojima senzori i merni elementi rade. Pre kalibracije potrebno je definisati referentne vrednosti, tolerancije i merne tačke koje će biti korišćene za poređenje stanja pre i posle promene.',
          'Bez ovog koraka nije dozvoljeno zaključiti da je pilot uspešan, jer svako očitavanje može biti posledica promene instrumenta, a ne procesa.',
        ],
      },
      {
        title: 'Postupak kalibracije',
        bullets: [
          '1. Identifikovati sve senzore i merne tačke koje utiču na KPI pilota: brzinu linije, broj komada, masu, nivo, temperaturu, pritisak ili drugo relevantno očitavanje.',
          '2. Uporediti trenutno očitavanje svakog elementa sa referentnim standardom ili etalonom.',
          '3. Zabeležiti početno odstupanje i proveriti da li je u granici dozvoljene tolerancije pre bilo kakve korekcije.',
          '4. Izvršiti podešavanje ili softversku korekciju prema propisanoj proceduri za konkretan senzor ili instrument.',
          '5. Ponoviti merenje najmanje tri puta pod istim uslovima kako bi se potvrdila stabilnost nakon korekcije.',
          '6. Ako pilot promena menja fizički raspored ili uslove rada, proveriti da li se stabilnost merenja održava i u novom režimu.',
          '7. Sve korekcije uneti u zapisnik sa vremenom, osobom koja je izvršila kalibraciju i referentnom vrednošću na osnovu koje je odluka doneta.',
        ],
      },
      {
        title: 'Potvrda stabilnosti posle kalibracije',
        bullets: [
          'Izvršiti probni ciklus ili reprezentativnu seriju i potvrditi da očitavanja ostaju u toleranciji tokom stvarnog rada.',
          'Uporediti rezultat sa baznim stanjem pre pilota i potvrditi da je razlika posledica procesa, a ne promene mernog sistema.',
          'Ako različite smene dobijaju različita očitavanja, proveriti uslove rada i ponoviti verifikaciju pre donošenja improvement odluke.',
          'Quality i process owner zajednički potvrđuju da se podaci mogu koristiti za odluku o standardizaciji promene.',
        ],
      },
      {
        title: 'Kada rezultat nije prihvatljiv',
        bullets: [
          'Ako odstupanje i dalje prelazi toleranciju nakon korekcije, pilot se ne ocenjuje dok se merni sistem ne stabilizuje.',
          'Ako nije poznata ili potvrđena referentna vrednost, svako očitavanje se smatra informativnim, ne validacionim.',
          'Ako novi raspored rada utiče na dostupnost senzora ili uslove merenja, potrebno je redefinisati merne tačke pre nastavka pilota.',
          'Ako kalibracija zavisi od spoljnog dobavljača ili sertifikovanog etalona, rezultat se eskalira odgovornom licu i ne zatvara lokalnom procenom.',
        ],
        note:
          'Uz improvement tag kao što je T-2025-051, ovaj dokument potvrđuje da se korist promene meri kroz stvarne performanse procesa, a ne kroz netačnost opreme ili senzora.',
        noteTone: 'info',
      },
    ],
  },
  kb28: {
    linkedTagIds: ['T-2025-042', 'T-2025-051'],
    accent: 'neutral',
    cardWidth: 'w-[120px] sm:w-[150px] md:w-[190px]',
    position: {
      bottom: '8%',
      right: '2%',
      animationDelay: '2.2s',
      '--duration': '8.2s',
      '--rotation': '-2deg',
    } as React.CSSProperties,
    contextSummary:
      'Video tutorijal pomaže operaterima da razumeju standardni tok rada na liniji, kako da prijave odstupanja i kako da usvoje novu organizaciju rada bez dodatne konfuzije.',
    detailedDescription: [
      'Ovaj video tutorijal ima posebnu ulogu zato što prevodi dokumentovano znanje u ponašanje koje operater može odmah da primeni na liniji. Kada se uvede korektivna ili improvement promena, dokument sam po sebi često nije dovoljan. Ljudi moraju da vide kako nova rutina izgleda u prostoru i kojim redosledom se izvodi.',
      'Najveću vrednost video daje u periodu neposredno posle promene, kada više smena treba brzo da usvoji isti standard. U tim situacijama postoji veliki rizik da se nova pravila tumače različito ili da ljudi improvizuju po staroj navici.',
      'Dokument je važan i zato što prikazuje ne samo šta treba raditi, već i gde ljudi najčešće greše. To ga čini posebno korisnim za onboarding, rotaciju zaposlenih i pilot promene koje tek treba da postanu standard.',
      'U improvement kontekstu, tutorijal pomaže da se promena zaključa u praksi. Mnoge dobre ideje propadnu ne zato što su tehnički loše, već zato što ljudi nisu na isti način razumeli kako treba da rade posle promene.',
      'Na duži rok, ovakav sadržaj smanjuje zavisnost od pojedinaca koji “znaju kako se to radi” i pretvara iskustvo u deljivo, prenosivo i dosledno organizaciono znanje.',
    ],
    sections: [
      {
        title: 'Plan obuke po smeni',
        paragraphs: [
          'Ovaj dokument prati video tutorijal i koristi se za uvođenje novog ili izmenjenog standarda rada na liniji punjenja. Svaka smena mora proći kroz isti tok: pregled promene, gledanje tutorijala, praktičnu demonstraciju na liniji i potvrdu da operater ume samostalno da prati novi redosled rada.',
          'Dokument je obavezan kada je uvedena improvement promena, kada su rasporedi stanica promenjeni ili kada se posle bezbednosnog/kvalitativnog odstupanja menja standard ponašanja operatera.',
        ],
      },
      {
        title: 'Standardni tok rada operatera',
        bullets: [
          '1. Pre starta proveriti da je radna stanica čista, da su materijali pripremljeni i da nema blokiranih ili improvizovanih pristupa opremi.',
          '2. Pokrenuti liniju isključivo redosledom prikazanim u tutorijalu, bez preskakanja predstart provere i bez ručnog ubrzavanja inicijalnog ciklusa.',
          '3. Tokom rada držati se definisanog rasporeda kretanja i tačaka preuzimanja kako bi se izbeglo ukrštanje operatera i nepotrebni povrati unazad.',
          '4. Svako odstupanje toka proizvoda, zastoja, zaprljanja ili nejasnog signala prijaviti odmah, a ne rešavati improvizacijom van standarda.',
          '5. Pri promeni formata ili kratkom zastoju slediti tačno isti redosled koraka iz tutorijala i potvrditi da su svi elementi vraćeni pre restarta.',
          '6. Na kraju smene ostaviti stanicu u stanju pogodnom za narednog operatera, bez prećutnih “prečica” koje nisu deo standarda.',
        ],
      },
      {
        title: 'Postupanje pri odstupanju',
        bullets: [
          'Ako operater nije siguran koji je sledeći korak, rad se usporava ili zaustavlja i traži se potvrda vođe smene.',
          'Ako promena uvodi novi kvalitetni ili bezbednosni rizik, otvara se tag i obuka se dopunjuje pre nastavka pune implementacije.',
          'Ako jedna smena radi drugačije od druge, dokument nalaže zajedničku re-obuku uz demonstraciju na istoj stanici.',
          'Ako tutorijal ne pokriva realnu situaciju sa linije, potrebno je ažurirati materijal, a ne tolerisati lokalnu improvizaciju.',
        ],
      },
      {
        title: 'Kriterijumi usvajanja standarda',
        bullets: [
          'Operater može samostalno da izvede start, radni ciklus, kratki stop i završetak smene bez pomoći i bez odstupanja od redosleda.',
          'Vođa smene potvrđuje da se novi standard primenjuje jednako u svim smenama i da nema povratka na stari raspored rada.',
          'Prva serija posle obuke mora biti proizvedena bez novih quality ili safety odstupanja vezanih za novi standard.',
          'Ako standard nije usvojen u dve uzastopne smene, promena se ne smatra stabilizovanom i ostaje u fazi pilot primene.',
        ],
        note:
          'Ovo je most između prijavljenog problema, definisane akcije i svakodnevne prakse na liniji. Dokumentovano znanje se ovde pretvara u ponašanje koje operateri mogu da ponove.',
        noteTone: 'success',
      },
    ],
  },
};

const featuredArticleIds = ['kb1', 'kb6', 'kb5', 'kb3', 'kb4', 'kb7', 'kb29', 'kb26', 'kb27', 'kb28'];

const getIcon = (type: KnowledgeBaseItem['type']) => {
  switch (type) {
    case 'document':
      return FileText;
    case 'sop':
      return FileCode;
    case 'video':
      return Video;
    case 'image':
      return ImageIcon;
    case 'instruction':
      return BookOpen;
    default:
      return FileText;
  }
};

const getTypeLabel = (type: KnowledgeBaseItem['type']) => {
  switch (type) {
    case 'document':
      return 'Dokument';
    case 'sop':
      return 'SOP';
    case 'video':
      return 'Video';
    case 'image':
      return 'Dijagram';
    case 'instruction':
      return 'Uputstvo';
    default:
      return 'Dokument';
  }
};

const getNoteClasses = (tone: ArticleSection['noteTone']) => {
  switch (tone) {
    case 'warning':
      return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    case 'success':
      return 'bg-green-50 border-green-200 text-green-800';
    default:
      return 'bg-blue-50 border-blue-200 text-blue-800';
  }
};

const Slide8Content: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<FeaturedKnowledgeArticle | null>(null);

  const featuredArticles = useMemo(() => {
    const articleMap = Object.fromEntries(mockKnowledgeBase.map((item) => [item.id, item])) as Record<string, KnowledgeBaseItem>;

    return featuredArticleIds.map((id) => ({
      ...articleMap[id],
      ...articleDetails[id],
    }));
  }, []);

  return (
    <div className="h-full relative overflow-hidden w-full overflow-y-auto max-sm:overflow-visible max-sm:px-3 max-sm:py-4">
      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center space-y-2 sm:space-y-4 px-3 sm:px-4 max-sm:static max-sm:translate-x-0 max-sm:translate-y-0 max-sm:px-0">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white transition-colors">Baza Znanja</h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed px-2 transition-colors">
          Centralizovani repozitorijum za SOP-ove, uputstva i dokumentaciju, direktno povezanu sa tagovima iz proizvodnje
        </p>
      </div>

      <div className="absolute inset-0 max-sm:static max-sm:mt-6 max-sm:grid max-sm:grid-cols-1 max-sm:gap-3">
        {featuredArticles.map((article) => {
          const Icon = getIcon(article.type);
          const isPrimary = article.accent === 'primary';

          return (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`absolute ${article.cardWidth} rounded-xl p-2 sm:p-3 md:p-4 shadow-lg animate-float pointer-events-auto text-left transition-all hover:scale-[1.02] max-sm:static max-sm:w-full max-sm:animate-none max-sm:p-4 ${
                article.hiddenOnMobile ? 'hidden md:block' : 'block'
              } ${
                isPrimary
                  ? 'bg-blue-500 border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600'
                  : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
              style={article.position}
            >
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isPrimary ? 'text-white' : 'text-blue-500'}`} strokeWidth={2} />
                  <span className={`text-xs font-semibold uppercase ${isPrimary ? 'text-white' : 'text-blue-500'}`}>
                    {getTypeLabel(article.type)}
                  </span>
                </div>
                <div className={`text-xs md:text-sm font-semibold ${isPrimary ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {article.title}
                </div>
                <div className={`text-xs ${isPrimary ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>{article.category}</div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {article.linkedTagIds.map((tagId) => (
                    <span
                      key={tagId}
                      className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
                        isPrimary ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200'
                      }`}
                    >
                      <Link2 className="w-2.5 h-2.5" strokeWidth={2} />
                      {tagId}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pointer-events-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col transition-colors max-sm:max-h-[96vh]">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-500">
                  {React.createElement(getIcon(selectedArticle.type), { className: 'w-5 h-5', strokeWidth: 2 })}
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{getTypeLabel(selectedArticle.type)}</span>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{selectedArticle.title}</h2>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 space-y-5 sm:space-y-6">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Kontekst</span>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{selectedArticle.contextSummary}</p>
              </div>

              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Kategorija</span>
                <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{selectedArticle.category}</div>
              </div>

              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Opis</span>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{selectedArticle.description}</p>
              </div>

              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Uvod i namena</span>
                <div className="mt-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 space-y-3">
                  {selectedArticle.detailedDescription.map((paragraph) => (
                    <p key={paragraph} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Dokument</span>
                <div className="mt-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-4 space-y-5 transition-colors">
                  {selectedArticle.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                      {section.description && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{section.description}</p>
                      )}
                      {section.paragraphs && (
                        <div className="space-y-3">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                      {section.bullets && (
                        <ul className="space-y-2">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.note && (
                        <div className={`mt-3 border rounded-lg p-3 text-xs ${getNoteClasses(section.noteTone)}`}>
                          {section.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-4 sm:px-6 border-t border-gray-200 dark:border-gray-800 max-sm:flex-col">
              <button className="flex-1 h-10 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 max-sm:w-full">
                <Download className="w-4 h-4" strokeWidth={2} />
                Preuzmi dokument
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex-1 h-10 px-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors max-sm:w-full"
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide8Content;

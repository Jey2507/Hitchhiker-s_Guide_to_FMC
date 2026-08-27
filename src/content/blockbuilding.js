export const BLOCKBUILDING = [
  {
    id: "blockbuilding",
    title: "Blockbuilding",
    kicker: "Крок 1",
    blocks: [
      {
        t: "p",
        c: "Перше і напевно найпростіше покращення, яке можна додати до збірки фрідріхом, — використання блоків. Замість того щоб збирати хрест, а потім пари, ви будете збирати «квадрат» 2×2×1, потім додавати його до ребра й отримувати блок 2×2×2 (блок як у x-cross без зібраних 2 елементів хреста), потім додаючи до нього ще один квадрат — блок 2×2×3 (як у xx-cross без зібраного 1 елемента хреста), і останній квадрат — до F2L-1, після чого збірку можна закінчити як зазвичай.",
      },
    ],
    resourceGroups: [
      {
        title: "Великі туторіали — знадобляться для всього аж до цього розділу",
        items: [
          {
            label: "3x3 Efficient Block Building Tutorial (FMC)",
            url: "https://youtu.be/EVxOn0QVVoE?list=PLI24ciRbl8BWBKJjwdrKEjTcnTmtaUpWS",
          },
          {
            label: "Тренажер блокбілдингу",
            url: "https://cubegrass.appspot.com/block_trainer/",
          },
          {
            label: "Fewest Moves Complete Tutorial (таймкоди на кожну тему в описі)",
            url: "https://youtu.be/YCuDT4Bfg4s",
          },
          {
            label: "«Біблія» кх — великий текстовий туторіал (PDF)",
            url: "https://fmcsolves.cubing.net/fmc_tutorial_ENG.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "eo",
    title: "EO — орієнтація ребер",
    kicker: "Крок 2",
    blocks: [
      {
        t: "p",
        c: "Наступним відносно простим покращенням буде додавання **EO** — орієнтації ребер. Якщо коротко, є спосіб зорієнтувати ребра куба на початку збірки так, що у випадку збірки CFOP-ом її можна закінчити без перехватів і завжди з хрестовим OLL.",
      },
      {
        t: "p",
        c: "Особисто я рекомендую завжди починати з EO до 5 рухів і перебирати їхні варіанти до отримання простих блоків, хоча знаю, що багато хто збирає достатньо гарно, роблячи EO після блоків 2×2×2, 2×2×3 чи навіть F2L-1.",
      },
      {
        t: "p",
        c: "Основна ідея в тому, що EO зводить куб до простішого положення (ідея, яка буде розширена в наступному розділі про DR), а куб у зібраному стані має орієнтовані ребра — тому EO в будь-якому разі треба робити, свідомо чи несвідомо. І чим раніше, тим краще.",
      },
    ],
    resourceGroups: [
      {
        title: "Ресурси",
        items: [
          {
            label: "3x3 ZZ Method Speedsolving Tutorial (for CFOP Solvers) — метод ZZ, частиною якого є EO",
            url: "https://youtu.be/iNSUBnWaRxo",
          },
          {
            label: "FMC: a guide for finding DRs (Domino Reduction guide) — туторіал по отриманню DR, частиною якого є EO",
            url: "https://www.speedsolving.com/threads/fmc-a-guide-for-finding-drs-domino-reduction-guide.87402/",
          },
        ],
      },
      {
        title: "Просунуті ресурси",
        items: [
          { label: "Приклади збірки EO", url: "https://www.cuberoot.me/eo/" },
          {
            label: "4 move EO cases.pdf",
            url: "https://drive.google.com/file/d/12tak4BVz5sgZwVKs4yy36k20lzcYE269/view",
          },
          {
            label: "6 bad edges, 5 move optimal cases",
            url: "https://docs.google.com/document/d/1bqkcoo_BlvdO2gVOMkTHajxeE3TT0rNZpOo3AEO-zZQ/edit?usp=drivesdk",
          },
          {
            label: "8 bad edges, 5 move optimal cases",
            url: "https://docs.google.com/document/d/1BtyNo0bKjxlNw8euo9b6MqYmn5wWYkkuTXmy4gi9IWU/edit?usp=sharing",
          },
          {
            label: "All 5 Move EO (and more) — повне саб6 EO",
            url: "https://docs.google.com/spreadsheets/d/1K38k5BQUV5PQh4ZmeJGNfrRZbnuhVePp4CLqyCIelm4/edit?usp=drivesdk",
          },
        ],
      },
    ],
  },
  {
    id: "niss",
    title: "NISS",
    kicker: "Крок 3",
    blocks: [
      {
        t: "p",
        c: "**NISS** (англ. *normal-inverse scramble switching*) — це спосіб одночасно шукати «початок» і «кінець» вашого фінального рішення. Саме ця техніка допомогла встановити національний рекорд 28.67 середнє простим фрідріхом.",
      },
      {
        t: "steps",
        items: [
          { label: "Нехай скрамбл", formula: "S" },
          { label: "Ти зробив якісь рухи", formula: "A" },
          {
            label: "Тоді можеш зробити",
            formula: "A' S'",
            note: "і зібрані елементи залишаться зібраними, але куб буде в трохи іншому стані",
          },
          { label: "Тоді робиш якісь рухи після інвертованого скрамблу", formula: "B" },
          { label: "Знову перейти на початок", formula: "B' S A" },
          { label: "І знову в кінець", formula: "A' S' B" },
          { label: "Фінальне рішення", formula: "A B'", note: "фінал" },
        ],
      },
      {
        t: "note",
        tone: "tip",
        title: "Як інвертувати рухи",
        c: "Зробити A' означає інвертувати всі рухи A, тобто якщо A = `R U R' U'`, то A' = `U R U' R'` (порядок рухів реверсується, і кожен рух інвертується).",
      },
    ],
    resourceGroups: [
      {
        title: "Ресурси",
        items: [
          {
            label: "3x3 Fewest Moves: Scramble Switch Tutorial (NISS) FMC",
            url: "https://youtu.be/b230h49TVkk?si=Rp4vKqgeM_GRXgm1",
          },
          {
            label: "3x3 Fewest Moves: FAKE Blocks (Pseudo Blocks) FMC",
            url: "https://youtu.be/4DchlVmclwo?si=c5Fw_T1auVkdq4MS",
          },
        ],
      },
    ],
  },
  {
    id: "insertions",
    title: "Вставки (Insertions)",
    kicker: "Крок 4",
    blocks: [
      {
        t: "p",
        c: "Наступним покращенням збірки блокбілдингом буде використання вставок. Після того як ви зібрали блок F2L-1 та EO, ви замість того щоб збирати F2L, OLL і PLL, збираєте… ребра.",
      },
      {
        t: "p",
        c: "Якщо у вас є EO і вам пощастило — просто заженіть останнє ребро F2L так, щоб ребра останнього шару теж зібрались. Якщо не пощастило і так загнати його не можна, спробуйте привести до такої ситуації або зібрати F2L-1 по-іншому.",
      },
      {
        t: "p",
        c: "Після того як F2L-1 та всі ребра зібрано, залишається зібрати кутики — якнайбільше 5 — і тут у гру вступають **комутатори**. Можливо, ви чули, що комутатори — це те, чим збирають всліпу топи, і це справді вони. «Чисті» комутатори кутів, тобто без додаткового сетапу, займають 8 рухів, але суть у тому, що комутатор «зачіпає» всього 3 елементи — 3 кути. Тому, знаючи, які кути треба зібрати, ви можете зробити потрібний комутатор у будь-який момент збірки, і куб збереться — а отже, можна знайти місце, де комутатор «скорочуватиме» рухи: відмінятиметься чи зливатиметься з рухами до і після нього.",
      },
      {
        t: "p",
        c: "Після збірки в кубика можуть лишитись такі ситуації з кутами (**c** — corner, **t** — twisted):",
      },
      {
        t: "cycleTable",
        rows: [
          { pattern: "3c", cost: 1 },
          { pattern: "3c1t, 2c2c, 5c, 3c3c, 2t, 3t", cost: 2 },
        ],
        footnote:
          "Усі інші ситуації (4c1t, 3c2t, 4t, 5t і т.д.) вирішуються більш ніж за 2 комутатори, а тому не цікаві в цьому контексті — варто шукати інше рішення ребер.",
      },
      {
        t: "p",
        c: "Після цього за допомогою наклейок чи позначень олівцем на матовому кубику занотуйте цикл(и) кутів і вирішіть їх якнайефективніше всередині збірки.",
      },
    ],
    resourceGroups: [
      {
        title: "Ресурси",
        items: [
          {
            label: "Rubik's Cube: How Commutators Work!",
            url: "https://youtu.be/rZiDvDGHfe8?si=Vk8vXI1jm4LnHybt",
          },
          {
            label: "3x3 Fewest Moves: Skeletons & Insertions | FMC",
            url: "https://youtu.be/zq8JMI5lTtY?si=hsXb9uVb_U-1KnZO",
          },
          { label: "Шукач вставок (Insertion Finder)", url: "https://333.fm/if" },
          { label: "Тренажер вставок", url: "https://dgcubes.com/pages/extras/fmc/" },
        ],
      },
    ],
  },
];

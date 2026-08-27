// Community links from the top of the original guide. Shown in the footer
// on every page (and expanded on the homepage) since the author stresses
// "these are useful on every step, not just at the start".
// `platform` doubles as the lookup key into SOCIAL_ICONS (src/components/ui/SocialIcons.jsx).
// `color` is each app's official brand color, used as the icon chip background.
export const COMMUNITIES = [
  {
    label: "FMC Geeks",
    platform: "Telegram",
    description: "Український телеграм-чат по кількості ходів.",
    url: "https://t.me/fmcgeeks",
    color: "#26A5E4",
  },
  {
    label: "FMC Discord",
    platform: "Discord",
    description: "Міжнародний дискорд-сервер по кх.",
    url: "https://discord.gg/cpF5ReAMJQ",
    color: "#5865F2",
  },
  {
    label: "FMC Facebook",
    platform: "Facebook",
    description: "Група в фб по кх, тут же щотижневий контест.",
    url: "https://www.facebook.com/groups/1422080808012720/?ref=share",
    color: "#1877F2",
  },
];

// People behind the guide, shown in the footer with a link to their WCA
// (World Cube Association) competitor profile.
export const AUTHORS = [
  {
    name: "Юрій Рябов",
    role: "текст гайду",
    url: "https://www.worldcubeassociation.org/persons/2018RIAB01",
  },
  {
    name: "Олег Топорович",
    role: "розробка сайту",
    url: "https://www.worldcubeassociation.org/persons/2018TOPO01",
  },
];

// `icon` is the lookup key into CONTEST_ICONS (src/components/ui/ContestIcons.jsx).
// `color` is the site's own brand/theme color where it has one (Facebook,
// 333.fm), otherwise a color picked to sit well next to the rest.
export const CONTESTS = [
  {
    label: "Facebook-група FMC",
    url: "https://www.facebook.com/groups/1422080808012720/?ref=share",
    note: "щотижневий контест",
    icon: "facebook",
    color: "#1877F2",
  },
  {
    label: "333.fm",
    url: "https://333.fm",
    note: "щотижневий контест і нескінченний челендж",
    icon: "cube",
    color: "#6366F1",
  },
  {
    label: "speedsolving.com",
    url: "https://www.speedsolving.com/",
    note: "щотижневий мін",
    icon: "forum",
    color: "#F59E0B",
  },
  {
    label: "cubers.io",
    url: "https://cubers.io",
    note: "щотижневий мін",
    icon: "timer",
    color: "#8B5CF6",
  },
  {
    label: "fewest-moves.info",
    url: "https://www.fewest-moves.info/",
    note: "щотижнева збірка і щомісячний мін",
    icon: "list",
    color: "#00ACC1",
  },
  {
    label: "sportcubing.in.ua",
    url: "https://sportcubing.in.ua/",
    note: "щотижнева збірка (Україна)",
    icon: "trophy",
    color: "#10B981",
  },
];

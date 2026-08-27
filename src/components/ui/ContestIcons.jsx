// Glyphs for the contest/practice links (ContestList). Same idea as
// SocialIcons.jsx: plain currentColor SVGs tinted white on a chip colored
// with each site's own brand/theme color (see communities.js `color` on
// CONTESTS). Sites without a distinct brand mark (speedsolving.com,
// sportcubing.in.ua) get a color chosen to read well next to the rest.
import { FacebookIcon } from "./SocialIcons.jsx";

export { FacebookIcon };

export function CubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5l9.5 5v11l-9.5 5-9.5-5v-11l9.5-5z" opacity="0.35" />
      <path d="M12 1.5v10l-9.5-5 9.5-5z" opacity="0.95" />
      <path d="M12 11.5l9.5-5v11l-9.5 5v-11z" opacity="0.65" />
    </svg>
  );
}

export function ForumIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.5L4 21v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function TimerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0012 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 006.03-15.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
    </svg>
  );
}

export function ListIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  );
}

export function TrophyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.95V18H7v2h10v-2h-4v-2.11c1.63-.32 2.98-1.45 3.61-2.95C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  );
}

export const CONTEST_ICONS = {
  facebook: FacebookIcon,
  cube: CubeIcon,
  forum: ForumIcon,
  timer: TimerIcon,
  list: ListIcon,
  trophy: TrophyIcon,
};

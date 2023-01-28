import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="container">
      <div className="flex flex-col items-center justify-between gap-4 py-10 border-t border-t-slate-200 dark:border-t-slate-700 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="w-6 h-6" />
          <p className="text-sm leading-loose text-center text-slate-600 dark:text-slate-400 md:text-left">
            <a
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              &copy; Yves Lecointre
            </a>
            . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

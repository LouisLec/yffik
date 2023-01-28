import Link from "next/link"
import { Linkedin } from "lucide-react"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { DocsSearch } from "@/components/search"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-b-slate-200 dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={docsConfig.mainNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <div className="flex-1 hidden sm:grow-0 md:flex">
            <DocsSearch />
          </div>
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Linkedin className="w-5 h-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

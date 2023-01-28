import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { AppleMusicDemo } from "@/components/apple-music-demo"
import { CopyButton } from "@/components/copy-button"
import { PromoVideo } from "@/components/promo-video"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <section className="grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="block lg:hidden">
          <PromoVideo />
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-row">
          <Link href="/docs" className={buttonVariants({ size: "lg" })}>
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedIn}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "md:hidden"
            )}
          >
            LinkedIn
          </Link>
          <pre className="items-center justify-between hidden pl-6 pr-2 space-x-2 overflow-x-auto border rounded-lg h-11 border-slate-100 bg-slate-100 dark:border-slate-700 dark:bg-black md:flex">
            <code className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-50">
              npx create-next-app -e https://github.com/shadcn/next-template
            </code>
            <CopyButton
              value="npx create-next-app -e https://github.com/shadcn/next-template"
              className="border-none text-slate-900 hover:bg-transparent dark:text-slate-50"
            />
          </pre>
        </div>
      </section>
      <section className="hidden lg:block">
        <AppleMusicDemo />
      </section>
    </>
  )
}

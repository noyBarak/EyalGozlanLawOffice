'use client';

import { useLocale } from '@/lib/locale-context';

export function Hero() {
  const { t, dir } = useLocale();

  return (
    <section
      id="home"
      className="flex min-h-[208px] items-center justify-center bg-white pt-20"
      dir={dir}
    >
      <h1 className="sr-only">{t.hero.title}</h1>
      <div className="mx-auto h-[108px] w-[108px] translate-y-8" aria-hidden="true">
        <div className="relative h-full w-full">
          <span className="absolute left-[40px] top-[8px] size-[28px] rotate-45 border-[3px] border-[#c8dff7]" />
          <span className="absolute left-[10px] top-[40px] size-[28px] rotate-45 border-[3px] border-[#81c6ec]" />
          <span className="absolute left-[70px] top-[40px] size-[28px] rotate-45 border-[3px] border-[#112549]" />
          <span className="absolute left-[40px] top-[72px] size-[28px] rotate-45 border-[3px] border-[#188cc4]" />
        </div>
      </div>
    </section>
  );
}

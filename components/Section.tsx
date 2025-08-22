// components/Section.tsx
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 sm:scroll-mt-24 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-6 max-w-prose text-base text-slate-200">
          {children}
        </div>
      </div>
    </section>
  );
}

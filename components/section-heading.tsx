export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

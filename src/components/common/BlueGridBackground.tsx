export default function BlueGridBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#003be2]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 min-h-screen">{children}</div>
    </section>
  );
}

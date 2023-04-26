// This layout will be implemented in all pages that including inside the about route.
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>
        <p className="text-center">Hello from about</p>
        {children}
      </section>
    </>
  );
}

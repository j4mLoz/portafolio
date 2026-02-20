export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        {children}
      </div>
    </div>
  );
}

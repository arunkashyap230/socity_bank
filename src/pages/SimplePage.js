const SimplePage = ({ title, description }) => (
  <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
    <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
    <p className="mt-3 text-slate-500">{description}</p>
  </section>
);

export default SimplePage;

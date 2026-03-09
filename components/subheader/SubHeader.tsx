export default function SubHeader({ children }: { children: React.ReactNode }) {
  const colors = [
    {
      from: "#4B0082",
      to: "#87CEFA",
    },
    {
      from: "#DAA520",
      to: "#F5F5DC",
    },
    {
      from: "#800020",
      to: "#F5B7B1",
    },
    {
      from: "#556B2F",
      to: "#FFFFF0",
    },
    {
      from: "#36454F",
      to: "#C0C0C0",
    },
    {
      from: "#003366",
      to: "#336699",
    },
    {
      from: "#008080",
      to: "#40E0D0",
    },
    {
      from: "#001F3F",
      to: "#0074D9",
    },
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const { from, to } = colors[randomIndex];
  return (
    <div
      className={`flex flex-row justify-start text-white 
             px-4 sm:px-10 md:px-20 lg:px-36 
             py-4 sm:py-6 lg:py-4`}
      style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
      }}
    >
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {children}
      </div>
    </div>
  );
}

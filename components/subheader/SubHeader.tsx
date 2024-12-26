export default function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-start bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8">
      <div className="text-4xl">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-[10px] leading-relaxed text-white/70 sm:text-xs">
          © {new Date().getFullYear()} Plano Escala · Xingyu. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

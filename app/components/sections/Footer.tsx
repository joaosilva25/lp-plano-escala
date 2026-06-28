export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs text-white/70">
          © {new Date().getFullYear()} Plano Escala · Xingyu. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

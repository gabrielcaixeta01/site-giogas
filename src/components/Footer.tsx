export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-200 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        <p className="text-sm text-center md:text-center">
          © {new Date().getFullYear()} GioGás — Todos os direitos reservados.
        </p>
    
      </div>
    </footer>
  );
}
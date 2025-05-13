import Link from "next/link";

export default function NavBar() {
    return (
      <nav className="flex gap-4">
        <Link href="/" className="text-sm text-gray-700 hover:text-primary">홈</Link>
        <Link href="/dashboard" className="text-sm text-gray-700 hover:text-primary">대시보드</Link>
        
      </nav>
    );
  }
  
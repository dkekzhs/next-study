import Logo from '../atoms/Logo';
import NavBar from '../molecules/NavBar';

export default function HeaderSection() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow flex justify-between items-center">
      <Logo />
      <NavBar />
    </header>
  );
}

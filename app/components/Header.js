import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href='/' className=' flex flex-col'>
        <Image
          src="/fairytale_sword_fantasy_world_weapon_icon_258474.png"
          width={100}
          height={100}
          alt="v"
          priority
        />
        <strong className=" text-center" >itProject</strong>

      </Link>
      <nav className=" flex items-center">
        <Link href="/">Головна</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/pages">Новини</Link>
        <Link href="/contact">Контакти</Link>
      </nav>
    </header>
  );
};

export default Header;

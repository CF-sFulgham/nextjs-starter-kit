import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
    <footer className="border-t p-6 md:p-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image
                src="/cflogo.png"
                alt="Creation Foundation Logo"
                width={51}
                height={12}
                className="filter brightness-125"
            />
            <span className="text-xl font-aeonik-pro leading-none">
              Creation
              <br /> 
              Foundation
            </span>
          </div>
          <p className="text-sm">© 2025 Creation Foundation. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-cyan-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-cyan-500 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-cyan-500 hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    );
}
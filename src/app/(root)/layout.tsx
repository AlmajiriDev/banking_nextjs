import MobileNav from '@/components/MobileNav';
import SideBar from '@/components/SideBar';
import Image from 'next/image';
import { getLoggedInUser } from '../../../lib/actions/user.actions';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = { firstName: 'Awwal', lastName: 'Adewuyi' };
  const loggedIn = await getLoggedInUser();
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={38} height={38} alt="logo" />{' '}
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

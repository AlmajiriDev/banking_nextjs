import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';
import { getLoggedInUser } from '../../../lib/actions/user.actions';
import { redirect } from 'next/navigation';

const Home = async () => {
  // const loggedIn = { firstName: 'Awwal', lastName: 'Adewuyi', email: 'almajiri.dev@gmailcom' };
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in');

  console.log('logged in user is ', loggedIn);

  return (
    <section className="home">
      <div className="home-content">
        <header className="Home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.name || 'Guest'}
            subtext="Access and manage you account and transactions efficiently."
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 114.5 }, { currentBalance: 245.1 }]}
      />
    </section>
  );
};

export default Home;

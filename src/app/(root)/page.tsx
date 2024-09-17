import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Awwal', lastName: 'Adewuyi', email: 'almajiri.dev@gmailcom' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="Home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage you account and transactions efficiently."
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 114.50}, {currentBalance: 245.10}]} />
    </section>
  );
};

export default Home;

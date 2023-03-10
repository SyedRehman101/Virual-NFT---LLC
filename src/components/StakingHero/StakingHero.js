import React from 'react';

const StakingHero = () => {
  return (
    <div className="lg:max-w-screen-xl w-full mx-auto">
      <div className="staking-content text-center">
        <span className='text-primaryG text-2xl font-bold'>Gameon</span>
        <h1 className='lg:text-7xl text-3xl font-black text-base-100 lg:px-48 px-4 leading-snug py-8'>Maximize Your Earnings with Laaverse Coin</h1>
        <p className='lg:text-xl text-md text-slate-400 px-4'>Stake and Reap the Rewards Today</p>


        <div className="flex justify-center gap-4 mt-8">
          <button className="btn border-0 lg:btn-lg btn-md rounded-full text-lg bg-primaryG hover:text-pure hover:bg-primaryDark">Explore Igos</button>
          <button className="text-lg btn lg:btn-lg btn-md btn-outline rounded-full lg:border-4 border-1 border-base-100 text-base-100">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default StakingHero;
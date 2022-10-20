import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';

import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import CreateAdModal from './components/CreateAdModal';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="NLW-eSports logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id} // React asks for a key always
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;

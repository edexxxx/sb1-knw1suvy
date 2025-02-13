import React from 'react';
import { 
  TrendingUp, 
  ChevronUp, 
  ChevronDown, 
  Star, 
  Search, 
  Bell, 
  Settings, 
  Clock, 
  DollarSign,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  BarChart2,
  Calendar,
  RefreshCw
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-blue-500" size={28} />
            <span className="text-xl font-bold">CryptoTrack</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search markets"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-700 rounded-lg">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-slate-700 rounded-lg">
              <Settings size={20} />
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { name: 'Bitcoin', symbol: 'BTC', price: '42,384.21', change: '+5.24%', icon: <DollarSign /> },
            { name: 'Ethereum', symbol: 'ETH', price: '2,245.12', change: '-2.12%', icon: <Wallet /> },
            { name: 'Market Cap', value: '$1.62T', change: '+1.25%', icon: <BarChart2 /> },
            { name: '24h Volume', value: '$84.2B', change: '+12.87%', icon: <Clock /> },
          ].map((item, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.symbol}</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-white">
                  <Star size={20} />
                </button>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">
                  ${item.price || item.value}
                </div>
                <div className={`flex items-center gap-1 text-sm ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {item.change.startsWith('+') ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <h2 className="text-xl font-bold">Market Leaders</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-sm text-slate-400 hover:text-white">
                <RefreshCw size={16} />
                Updated 1m ago
              </button>
              <button className="flex items-center gap-1 text-sm bg-slate-700 px-3 py-1 rounded-lg hover:bg-slate-600">
                <Calendar size={16} />
                24H
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-slate-400 text-sm">
                  <th className="text-left p-4">Asset</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-right p-4">24h Change</th>
                  <th className="text-right p-4">24h Volume</th>
                  <th className="text-right p-4">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Bitcoin', symbol: 'BTC', price: '42,384.21', change: '+5.24', volume: '28.2B', cap: '824.5B', img: 'https://source.unsplash.com/random/32x32?bitcoin' },
                  { name: 'Ethereum', symbol: 'ETH', price: '2,245.12', change: '-2.12', volume: '14.1B', cap: '268.9B', img: 'https://source.unsplash.com/random/32x32?ethereum' },
                  { name: 'Binance', symbol: 'BNB', price: '312.45', change: '+1.84', volume: '2.4B', cap: '48.2B', img: 'https://source.unsplash.com/random/32x32?binance' },
                  { name: 'Solana', symbol: 'SOL', price: '98.73', change: '+12.34', volume: '4.8B', cap: '42.1B', img: 'https://source.unsplash.com/random/32x32?solana' },
                  { name: 'Cardano', symbol: 'ADA', price: '0.512', change: '-0.98', volume: '1.2B', cap: '18.4B', img: 'https://source.unsplash.com/random/32x32?cardano' },
                ].map((coin, index) => (
                  <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={coin.img} alt={coin.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <div className="font-medium">{coin.name}</div>
                          <div className="text-sm text-slate-400">{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-right">${coin.price}</td>
                    <td className={`p-4 text-right ${parseFloat(coin.change) > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change}%
                    </td>
                    <td className="p-4 text-right">${coin.volume}</td>
                    <td className="p-4 text-right">${coin.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
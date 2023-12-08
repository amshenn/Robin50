import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';

// Example stocks data (replace with your actual stock data)
const exampleStocks = [
  { id: 1, name: 'AAPL', quantityOwned: 10, amount: '$1,942.70' },
  { id: 2, name: 'GOOGL', quantityOwned: 5, amount: '$684.65' },
  { id: 3, name: 'MSFT', quantityOwned: 8, amount: '$2,967.60' },
  // Add more stock entries as needed
];

export default function StockPortfolio() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Current Portfolio
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {exampleStocks.map((stock, i) => (
            <div
              key={stock.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base">
                  {stock.name}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  Quantity Owned: {stock.quantityOwned}
                </p>
              </div>
              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
              >
                {stock.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}

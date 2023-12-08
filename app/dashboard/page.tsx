import CardWrapper from '../ui/dashboard/cards';
import StockPortfolio from '@/app/ui/dashboard/portfolio-display';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
 export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <StockPortfolio />
        </Suspense>
      </div>
    </main>
  );
 }
  
  
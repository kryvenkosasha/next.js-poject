import AddCompanyButton from '@/components/AddCompanyButton/AddCompanyButton';
import StatusLabel, { Status } from '@/components/StatusLabel/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}

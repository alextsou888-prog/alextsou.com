import { cookies } from 'next/headers';
import { PortfolioClient } from './portfolio-client';

export default async function Home() {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get('alextsou-language')?.value;
  const initialLanguage = savedLanguage === 'en' || savedLanguage === 'zh' ? savedLanguage : 'zh';

  return <PortfolioClient initialLanguage={initialLanguage} />;
}

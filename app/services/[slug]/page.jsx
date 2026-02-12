import { services } from '@/data/services';
import ServiceDetail from '@/components/services/ServiceDetail';
import { notFound } from 'next/navigation';

// 1. Dynamic SEO Metadata (Note the 'await params')
export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Dr. Maya Reynolds`,
    description: service.shortDesc,
  };
}

// 2. The Page Component (Note the 'await params')
export default async function SingleServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceDetail serviceData={service} />
    </main>
  );
}

// 3. Static Pre-rendering
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
import { Helmet } from 'react-helmet-async';
import { organizationSchema } from '@/config/seo';

/**
 * Global Organization Schema
 * Should be included once in the App layout
 */
export const OrganizationSchema: React.FC = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;

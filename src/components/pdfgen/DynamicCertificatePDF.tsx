import dynamic from 'next/dynamic';

// Dynamic import the CertificatePDF component
const DynamicCertificatePDF = dynamic(
    () => import('./PDFGenerator'),
    { loading: () => <p>Loading PDF...</p>, ssr: false }
);

export default DynamicCertificatePDF;

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Required worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer=({ url })=> {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Document file={url}>
        <Page pageNumber={1} width={800} />
      </Document>
    </div>
  );
}
export default  PDFViewer
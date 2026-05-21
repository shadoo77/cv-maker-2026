import type { RefObject } from 'react';
import { useReactToPrint } from 'react-to-print';

const pageStyle = `
  @page {
    size: A4 portrait;
    margin: 0 !important;
  }
  @media print {
    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .cv-container-print {
      width: 100% !important;
      max-width: 100% !important;
      height: 100% !important;
      padding: 15mm !important;
      box-sizing: border-box !important;
      box-shadow: none !important;
      border: none !important;
      border-radius: 0 !important;
    }
    svg {
      filter: none !important;
    }
  }
`;

export function useCvPrint(contentRef: RefObject<HTMLDivElement | null>) {
  return useReactToPrint({ contentRef, pageStyle });
}

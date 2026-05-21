import type { RefObject } from 'react';
import { useReactToPrint } from 'react-to-print';

function getPageStyle(darkMode: boolean) {
  return `
    ${darkMode ? `
      body {
        background-color: #090d16 !important;
        color: #f1f5f9 !important;
      }
    ` : ''}
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
}

interface UseCvPrintOptions {
  contentRef: RefObject<HTMLDivElement | null>;
  darkMode: boolean;
  documentTitle?: string;
}

export function useCvPrint({ contentRef, darkMode, documentTitle }: UseCvPrintOptions) {
  return useReactToPrint({
    contentRef,
    pageStyle: getPageStyle(darkMode),
    bodyClass: darkMode ? 'dark' : undefined,
    documentTitle: documentTitle ?? 'CV',
  });
}

import { useCallback } from 'react';

export function useCvPrint() {
  return useCallback(() => {
    window.print();
  }, []);
}

import { useEffect, useState } from 'react';

export const useSync = ({
  toasts,
  setToasts,
  autoClose,
  autoCloseTime
}) => {
  const [removing, setRemoving] = useState<null | number>(null);

  useEffect(() => {
    if (removing) {
      console.log('REMOVING', removing)
      setToasts(t => t.filter(_t => _t.id !== removing));
    }
  }, [removing, setToasts]);

  useEffect(() => {
    if (autoClose && toasts.length) {
      const id = toasts[toasts.length - 1].id;
      console.log('autoClose', id)
      setTimeout(() => setRemoving(id), 5_000);
    }
  }, [toasts, autoClose]);
};

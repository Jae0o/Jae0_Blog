import { useCallback, useState } from "react";

export type SetLocalStorage<T> = (newData: T) => T;
export type RemoveLocalStorage = () => void;

export interface UseLocalStorageProps<T> {
  key: string;
  initialData: T;
}

type UseLocalStorage = <T>(props: UseLocalStorageProps<T>) => {
  data: T;
  setLocalStorage: SetLocalStorage<T>;
  removeLocalStorage: RemoveLocalStorage;
};

const useLocalStorage: UseLocalStorage = <T>({
  key,
  initialData,
}: UseLocalStorageProps<T>) => {
  const [data, setData] = useState<T>(() => {
    try {
      const res = localStorage.getItem(key);

      if (!res) {
        return initialData;
      }

      return JSON.parse(res);
    } catch (e) {
      console.error(e, "local storage get error!!");

      return initialData;
    }
  });

  const setLocalStorage: SetLocalStorage<T> = useCallback(
    newData => {
      try {
        const stringifiedData = JSON.stringify(newData);
        localStorage.setItem(key, stringifiedData);
        setData(newData);

        return newData;
      } catch (e) {
        console.error(e, "local storage hook set error!!");
        return initialData;
      }
    },
    [initialData, key],
  );

  const removeLocalStorage = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return { data, setLocalStorage, removeLocalStorage };
};

export default useLocalStorage;

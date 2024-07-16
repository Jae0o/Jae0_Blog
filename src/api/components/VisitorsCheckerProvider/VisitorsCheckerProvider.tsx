import { useEffect } from "react";

import { MUTATION_OPTIONS } from "@/api/query";
import { useLocalStorage } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

interface VisitorsCheckerProviderProps {
  children: React.ReactNode;
}

const VisitorsCheckerProvider = ({
  children,
}: VisitorsCheckerProviderProps) => {
  const { data, setLocalStorage } = useLocalStorage({
    key: "visitCheckTime",
    initialData: "",
  });
  const { mutate } = useMutation(MUTATION_OPTIONS.INCREASE_VISIT_COUNT());

  useEffect(() => {
    const time = new Date();
    const currentDate = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;

    if (currentDate === data) {
      return;
    }

    setLocalStorage(currentDate);
    mutate();

    // 첫 렌더링 시 동작을 위해 디펜던시 제외
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default VisitorsCheckerProvider;

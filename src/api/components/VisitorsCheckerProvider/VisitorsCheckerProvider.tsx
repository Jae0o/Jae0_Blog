import { useEffect } from "react";

import { MUTATION_OPTIONS } from "@/api/query";
import { useMutation } from "@tanstack/react-query";

interface VisitorsCheckerProviderProps {
  children: React.ReactNode;
}

const VisitorsCheckerProvider = ({
  children,
}: VisitorsCheckerProviderProps) => {
  const { mutate } = useMutation(MUTATION_OPTIONS.INCREASE_VISIT_COUNT());

  useEffect(() => {}, [mutate]);

  return <>{children}</>;
};

export default VisitorsCheckerProvider;

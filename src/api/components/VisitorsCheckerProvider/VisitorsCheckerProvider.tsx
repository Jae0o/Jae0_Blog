import { useEffect } from "react";

interface VisitorsCheckerProviderProps {
  children: React.ReactNode;
}

const VisitorsCheckerProvider = ({
  children,
}: VisitorsCheckerProviderProps) => {
  useEffect(() => {
    console.log("dd");
  }, []);

  return <>{children}</>;
};

export default VisitorsCheckerProvider;

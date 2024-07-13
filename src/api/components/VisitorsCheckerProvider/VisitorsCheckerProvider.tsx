interface VisitorsCheckerProviderProps {
  children: React.ReactNode;
}

const VisitorsCheckerProvider = ({
  children,
}: VisitorsCheckerProviderProps) => {
  return <>{children}</>;
};

export default VisitorsCheckerProvider;

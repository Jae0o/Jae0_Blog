import "./Loading.style.css";

import { LoadingSpinner } from "@/components";

const LoadingPage = () => {
  return (
    <section className="loading__background">
      <LoadingSpinner size="40rem" />
    </section>
  );
};

export default LoadingPage;

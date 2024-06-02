import "./InitialLoading.style.css";

import { LoadingSpinner } from "@/components";

const InitialLoading = () => {
  return (
    <section className="initial_loading">
      <LoadingSpinner size="40rem" />
    </section>
  );
};

export default InitialLoading;

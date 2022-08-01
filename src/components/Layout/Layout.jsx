import useDiscounts from "../../hooks/useDiscounts";
import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import Discount from "../Discount/Discount";

const Layout = () => {
  // State
  const [page, setPage] = useState(1);
  const [amount] = useState(10);

  // Hooks
  const { data, isLoading, error } = useDiscounts();

  const discounts = usePagination(data, amount, page);

  return (
    <main>
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          discounts.map((discount) => (
            <Discount discountData={discount} key={discount.id} />
          ))
        )}
      </section>
      <section>
        {data &&
          Array.from(Array(data.length / 10).keys()).map((item) => (
            <button key={item} onClick={() => setPage(item + 1)}>
              {item + 1}
            </button>
          ))}
      </section>
    </main>
  );
};

export default Layout;

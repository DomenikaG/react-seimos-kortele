import { useParams } from "react-router-dom";
import useDiscounts from "../../hooks/useDiscounts";

const DiscountDetailedPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useDiscounts(+id);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <main>
      <section>
        <h4>{data.yoast_head_json.og_title}</h4>
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src={data.yoast_head_json.og_image[0].url}
            style={{ width: "10%", height: "10%" }}
            alt="Nothing"
          ></img>
          <p>{data.yoast_head_json.og_description}</p>
        </div>
      </section>
    </main>
  );
};

export default DiscountDetailedPage;

import { Swiper } from "swiper/react";
import { CurrencyDollar, Info } from "@phosphor-icons/react";

import { formatPrice } from "../../../../utils/format-price";

import { Resume } from "./styles";

interface ResumesProps {
  totalPriceOnCart: number;
  limitCreditOnCart: number;
}

export const Resumes = ({
  totalPriceOnCart,
  limitCreditOnCart,
}: ResumesProps) => {
  const statusAsCompleted = totalPriceOnCart >= limitCreditOnCart;
  const cartStatus =
    totalPriceOnCart < limitCreditOnCart ? "Livre" : "Cheia";

  return (
    <Swiper
      className="resume"
      spaceBetween={12}
      breakpoints={{
        728: {
          slidesPerView: 3,
        },
        350: {
          slidesPerView: 2.1,
        },
        200: {
          slidesPerView: 1,
        },
      }}
    >
      <Resume completed={statusAsCompleted}>
        <header>
          <span>Status</span>
          <Info />
        </header>
        <strong>Sacola {cartStatus}</strong>
      </Resume>

      <Resume completed={statusAsCompleted}>
        <header>
          <span>Total na sacola</span>
          <CurrencyDollar />
        </header>
        <strong>{formatPrice(totalPriceOnCart)}</strong>
      </Resume>

      <Resume>
        <header>
          <span>Limite da sacola</span>
          <CurrencyDollar />
        </header>

        <strong>{formatPrice(limitCreditOnCart)}</strong>
      </Resume>
    </Swiper>
  );
};

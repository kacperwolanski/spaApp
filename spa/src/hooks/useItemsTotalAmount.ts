import { useEffect } from "react";
import { useAppStore } from "../store";
import { getItemsInfo } from "../api/apiClient";

const useItemsTotalAmount = () => {
  const { setTotalItemsAmount, totalItemsAmount } = useAppStore();
  const getAndSaveTotalItemsAmount = async () => {
    const response = await getItemsInfo();
    if (response) {
      const { total } = response;
      setTotalItemsAmount(total);
    }
  };

  useEffect(() => {
    if (!totalItemsAmount) {
      getAndSaveTotalItemsAmount();
    }
  }, []);
};

export default useItemsTotalAmount;

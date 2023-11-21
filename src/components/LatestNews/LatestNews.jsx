/* eslint-disable no-undef */

import { getLatestNews } from "../../API/apiNews";
import { useFetch } from "../../helpers/hocs/useFetch";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;

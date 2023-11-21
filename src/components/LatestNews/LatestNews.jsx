<<<<<<< HEAD
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
=======
import { getLatestNews } from "../../API/apiNews";
import { useFetch } from "../../helpers/hocs/useFetch";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
>>>>>>> 332c458 (add latest news)
    </section>
  );
};

export default LatestNews;

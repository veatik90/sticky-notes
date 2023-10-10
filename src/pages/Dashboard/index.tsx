import { FC } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { WorkingZone } from "../../components/WorkingZone";

export const Dashboard: FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <WorkingZone />
    </div>
  );
};

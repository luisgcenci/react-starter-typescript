import { FC } from "react";
import ModuleName from "modules/module-name/ModuleName";
import styles from "./css/App.module.css";

const App: FC = () => {
  return (
    <div className={styles.App}>
      <ModuleName />
    </div>
  );
};

export default App;

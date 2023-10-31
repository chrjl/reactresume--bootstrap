import { AppContextType } from '../../contexts/AppContext';
import styles from './AppBar.module.css';

import DataSourceController from './DataSourceController';
import SectionsController from './SectionsController';

interface AppBarProps {
  setAppContext: React.Dispatch<React.SetStateAction<AppContextType>>;
}

export default function AppBar({ setAppContext }: AppBarProps) {
  return (
    <div className={styles.container}>
      <DataSourceController setAppContext={setAppContext} />
      <SectionsController setAppContext={setAppContext} />
      <div>paper size</div>
      <div>icons</div>
    </div>
  );
}

import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '@/helpers/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';



const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;

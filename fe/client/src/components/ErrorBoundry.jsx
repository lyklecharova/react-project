import { Component } from 'react';

import styles from './ErrorBoundry.module.css';

export default class ErrorBoundary extends Component {
    // Инициализира началното състояние, обикновено само с флаг от тип булева стойност, който указва дали е възникнала грешка.
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        // Метод от жизнения цикъл, който се извиква след като грешка е хвърлена от долен компонент. Връща обект за актуализиране на състоянието.
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        // Още един метод от жизнения цикъл, който се извиква след като е възникнала грешка. Позволява извършването на странични ефекти, като например регистриране на грешката.
        console.log(error);
        
    }

    render() {
        //Визуализира или децата компоненти, или запасен потребителски интерфейс, в зависимост от това дали е възникнала грешка.
        if (this.state.hasError) {
            return <h1 className={styles['error-msg']}>Try Again &#128533;</h1>
        }

        return this.props.children;
    }
}
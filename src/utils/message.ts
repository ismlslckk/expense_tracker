
import { message } from 'antd';

const messageProvider = () => {

    const success = (text: string) => {
        message.success(text);
    };

    const error = (text: string) => {
        message.error(text);
    };

    const warning = (text: string) => {
        message.warning(text);
    }

    return {
        success: success,
        error: error,
        warning: warning
    };
}

export default messageProvider;
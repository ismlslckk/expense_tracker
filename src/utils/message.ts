


const messageProvider = (messageApi: any) => {


    const success = (message: string) => {
        messageApi.open({
            type: 'success',
            content: message,
        });
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };

    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    }

    return {
        success: success
    };
}

export default messageProvider;
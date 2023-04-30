import { Button, Form, Input, message } from 'antd';

import { useNavigate } from 'react-router-dom';
import { api } from '../utils';
import messageProvider from '../utils/message';

function SignUp() {

    let navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */



    const onFinish = async (values: any) => {
        try {
            await api().post("/users", values);
            messageProvider(messageApi).success("efewf");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="full_name" label="Full Name">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            {contextHolder}

        </Form>
    );
}


export default SignUp;
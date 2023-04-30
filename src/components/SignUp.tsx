import { Button, Col, Form, Input, Row, message } from 'antd';

import { useNavigate } from 'react-router-dom';
import { api } from '../utils';
import messageProvider from '../utils/message';

function SignUp() {

    let navigate = useNavigate();

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
            messageProvider().success("you've signed up");
            navigate("/login");
        } catch (error: any) {
            messageProvider().error(error.message);
        }
    };

    return (

        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <h2 style={{ textAlign: 'center' }}>Register</h2>
            <Row>
                <Col offset={4} span={12}>
                    <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={12}>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={12}>

                </Col>
            </Row>
            <Row>
                <Col offset={4} span={12}>
                    <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={12}>
                    <Form.Item name="full_name" label="Full Name">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col offset={4} span={12}>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    );
}


export default SignUp;
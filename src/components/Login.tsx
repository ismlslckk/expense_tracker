import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from "react";
import { api, messageProvider } from '../utils';
import { useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate();

    const onFinish = async (values: any) => {
        try {
            const req = {
                username: "mor_2314",
                password: "83r5^_"
            };

            const response = await api().post("/auth/login", req);
            console.log(response);
            messageProvider().success("you've logged in");
            navigate("/home");
        } catch (error: any) {
            messageProvider().error(error.message);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <React.Fragment>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row>
                    <Col offset={4} span={12}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col offset={4} span={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col offset={4} span={12}>
                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col offset={4} span={12}>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    );
}


export default Login;
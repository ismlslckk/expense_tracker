import { Button, Checkbox, Col, Form, Input, Row, Result } from 'antd';
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { LoginForm } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/userActions';
import { AppState } from '../store';
import { messageProvider } from '../utils';

function Login() {

    let location = useLocation();
    const dispatch = useDispatch();


    const { data, loading, error } = useSelector((state: AppState) => state.user);

    const onFinish = async (values: LoginForm) => {
        values.username = 'mor_2314';
        values.password = '83r5^_';
        dispatch(login(values));
    };

    useEffect(() => {
        error && messageProvider().error(error);
    }, [error])

    useEffect(() => {
        data.username && messageProvider().success("You've successfully logged in!");
    }, [data.username])

    return (
        <React.Fragment>
            <h2 style={{ textAlign: 'center' }}>Please Login</h2>

            {location.state?.newSignUp &&
                <Result
                    status="success"
                    title="You've signed up succeessfully"
                    subTitle="Please login with your username and password"
                />
            }


            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                /*  onFinishFailed={onFinishFailed} */
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
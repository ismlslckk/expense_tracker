import { Col, Form, Input, Row } from "antd";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const CategoryDetail = () => {

    const [searchParams] = useSearchParams();
    const location = useLocation();

    // there is no endpoint to get category detail, that's why i passed category as state property
    let category = location.state?.category;
    category = category ? category : {};

    useEffect(() => {
        console.log('id => ', searchParams.get('id'), ", categoryName => ", searchParams.get('categoryName'));
    }, []);


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    return (

        Object.keys(category).length > 0 ? <Form
            {...layout}
            initialValues={{ ...category }}

        >
            <h2 style={{ textAlign: 'center' }}>Category Detail</h2>
            <Row>
                <Col offset={6} span={8}>
                    <Form.Item name="id" label="Id">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col offset={6} span={8}>
                    <Form.Item name="description" label="Description">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col offset={6} span={8}>
                    <Form.Item name="title" label="Title">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </Form> : <></>
    );
}

export default CategoryDetail;
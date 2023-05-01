import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/categoryActions";
import { AppState } from "../store";
import { Space, Table } from "antd";
import { RightCircleFilled, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, loading, error } = useSelector((state: AppState) => state.categories);


    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <RightCircleFilled onClick={() => {
                        navigate({
                            pathname: "/category-detail",
                            search: `?id=${record.id}&categoryName=${record.title}`,
                        }, { state: { category: record } });
                    }} />
                </Space>
            ),
        },
    ];

    return (

        <>
            <h2>Category List</h2>
            <Table columns={columns} rowKey={(record) => record.id} dataSource={data} />
        </>
    );

};

export default CategoryList;
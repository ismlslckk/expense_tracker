import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/categoryActions";
import { AppState } from "../store";
import { Space, Table } from "antd";

const CategoryList = () => {

    const dispatch = useDispatch();

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
                    <a>View Products</a>
                </Space>
            ),
        },
    ];

    return (

        <>
            <Table columns={columns} dataSource={data} />
        </>
    );

};

export default CategoryList;
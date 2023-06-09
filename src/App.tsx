import { Route, Routes } from "react-router-dom";
import { CategoryDetail, CategoryList, Home, Login, ProtectedRoute, SignUp } from "./components";

import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (

    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '50px' }}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category-detail" element={<CategoryDetail />} />
          </Route>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Expense Tracker @ismail selcuk</Footer>
    </Layout>

  );
}

export default App;

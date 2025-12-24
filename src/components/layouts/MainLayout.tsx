import {Outlet} from 'react-router-dom';
import AppHeader from './Header';
import { Layout } from "antd";

const { Content, Footer } = Layout;
const MainLayout = () => {
    return(
        <Layout className="min-h-screen">
            <AppHeader />
            
            <Content className="bg-gray-50 p-4 md:p-8">
                <div className="max-w-6xl mx-auto bg-white min-h-[80vh] rounded-lg shadow-sm p-6">
                <Outlet />
                </div>
            </Content>

            <Footer className="text-center text-gray-400">
                © 2024 Profile Software Engineer
            </Footer>
        </Layout>
    )
}
export default MainLayout;
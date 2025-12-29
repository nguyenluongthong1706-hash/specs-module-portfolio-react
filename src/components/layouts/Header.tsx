import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Dropdown } from 'antd';
import { MenuOutlined, GlobalOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header } = Layout;

const AppHeader: React.FC = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const menuItems = [
        { key: '/', icon: <HomeOutlined />, label: t('menu.home') },
        { key: '/contact', icon: <MailOutlined />, label: t('menu.contact') },
    ];

    const languageItems = [
        { key: 'vi', label: 'Tiếng Việt', onClick: () => i18n.changeLanguage('vi') },
        { key: 'en', label: 'English', onClick: () => i18n.changeLanguage('en') },
    ];

    return (
        <Header 
            // Fix lỗi màu đen: Force background trắng và xóa padding mặc định của AntD
            style={{ 
                background: '#fff', 
                padding: '0 20px', 
                height: '64px', 
                lineHeight: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            className="sticky top-0 z-50 shadow-sm border-b border-gray-100"
        >
            {/* 1. Logo Section */}
            <div 
                className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => navigate('/')}
            >
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-blue-200 shadow-lg">
                    JD
                </div>
                <span className="ml-3 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 hidden sm:block">
                    Nguyen Luong Thong
                </span>
            </div>

            {/* 2. Desktop Menu: Căn giữa và làm trong suốt nền menu */}
            <div className="hidden md:block flex-1 px-10">
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    onClick={({ key }) => navigate(key)}
                    style={{ 
                        borderBottom: 'none', 
                        justifyContent: 'center',
                        background: 'transparent' // Đảm bảo menu không có nền trắng riêng biệt
                    }}
                    className="w-full"
                />
            </div>

            {/* 3. Actions Section */}
            <div className="flex items-center gap-3">
                <Dropdown menu={{ items: languageItems }} trigger={['click']}>
                    <Button 
                        type="text" 
                        icon={<GlobalOutlined className="text-blue-600" />}
                        className="flex items-center hover:bg-blue-50 transition-colors"
                    >
                        <span className="ml-1 font-medium text-gray-600 uppercase">
                            {i18n.language}
                        </span>
                    </Button>
                </Dropdown>

                {/* Mobile Toggle */}
                <Button
                    type="text"
                    className="md:hidden flex items-center justify-center"
                    icon={<MenuOutlined className="text-lg" />}
                    onClick={() => setOpenMobileMenu(true)}
                />
            </div>

            {/* 4. Mobile Menu */}
            <Drawer
                title={<span className="font-bold">Navigation</span>}
                placement="right"
                onClose={() => setOpenMobileMenu(false)}
                open={openMobileMenu}
                width={280}
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    onClick={({ key }) => {
                        navigate(key);
                        setOpenMobileMenu(false);
                    }}
                    style={{ borderRight: 'none' }}
                />
            </Drawer>
        </Header>
    );
};

export default AppHeader;
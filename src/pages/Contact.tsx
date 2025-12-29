import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { sendContactEmail } from '../services/emailService'; // Import service

type FieldType = {
    email: string,
    content: string
}

const { Title } = Typography;

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [form] = Form.useForm(); // Sử dụng Form instance để reset sau khi gửi
    const [loading, setLoading] = useState(false); // Trạng thái loading cho Button

    const onFinish = async (values: FieldType) => {
        setLoading(true);
        try {
            await sendContactEmail(values);
            
            // Thông báo thành công
            message.success(t('contact.success_message') || 'Gửi email thành công! Tôi sẽ phản hồi sớm.');
            
            // Xóa trắng form sau khi gửi thành công
            form.resetFields();
        } catch (error) {
            // Thông báo lỗi
            message.error(t('contact.error_message') || 'Gửi mail thất bại, vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full flex justify-center py-10 px-4">
            <Card 
                className="shadow-xl! w-full max-w-2xl rounded-3xl overflow-hidden"
                title={
                    <div className="pt-6">
                        <Title level={2} className="text-center m-0! font-bold">
                            {t('contact.title')}
                        </Title>
                        <div className="flex justify-center mt-3">
                            <div className="w-16 h-1.5 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                }
            >
                <Form
                    form={form} // Gán instance vào form
                    name="contact"
                    layout="vertical"
                    onFinish={onFinish}
                    className="px-2 md:px-8 pb-6"
                >
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">{t('contact.email')}</span>}
                        name='email'
                        rules={[
                            { required: true, message: t('contact.validation.required') },
                            { type: 'email', message: t('contact.validation.email') }
                        ]}
                    >
                        <Input size="large" className="rounded-xl" placeholder={t('contact.email')} />
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-semibold text-gray-700">{t('contact.content')}</span>}
                        name="content"
                        rules={[{ required: true, message: t('contact.validation.required') }]}
                    >
                        <Input.TextArea rows={6} className="rounded-xl" placeholder={t('contact.content')} />
                    </Form.Item>

                    <Form.Item className="text-center mt-8 mb-0">
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            size="large"
                            loading={loading} // Hiển thị vòng xoay khi đang gửi
                            disabled={loading} // Tránh người dùng bấm liên tiếp (spam)
                            className="h-auto py-3 px-12 rounded-2xl text-lg font-bold bg-blue-600! hover:bg-blue-700! border-none shadow-md"
                        >
                            {loading ? t('contact.sending') : t('contact.submit')}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Contact;
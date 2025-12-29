import React from 'react';
import { avatarImg } from '@/assets';
import { useTranslation } from 'react-i18next';
import { Card, Tag, Typography } from 'antd';
import { 
  FacebookFilled, LinkedinFilled, GithubFilled, 
  MailOutlined, PhoneOutlined, EnvironmentOutlined, 
  CalendarOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <Text className="text-blue-600 font-semibold text-lg">{t('home.hi')}</Text>
            <Title level={1} className="m-0! text-5xl!">
              Nguyen Luong Thong
            </Title>
            <Title level={3} className="m-0! text-gray-500 font-medium">
              {t('home.title')}
            </Title>
          </div>
          <Paragraph className="text-gray-600 text-lg max-w-xl">
            {t('home.description')}
          </Paragraph>
          <div className="flex gap-4 text-2xl">
            <a target = "_blank" href="https://www.facebook.com/nguyen.luong.thong.2025/" className="text-gray-400 hover:text-blue-600 transition-colors"><FacebookFilled /></a>
            <a target = "_blank" href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><LinkedinFilled /></a>
            <a target = "_blank" href="#" className="text-gray-400 hover:text-black transition-colors"><GithubFilled /></a>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full scale-105 blur-2xl opacity-50 animate-pulse"></div>
          <img 
            src={avatarImg} 
            alt="Avatar" 
            className="rounded-full w-full h-full object-cover border-8 border-white shadow-xl relative z-10"
          />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="bg-gray-50 -mx-6 md:-mx-10 p-10 rounded-3xl">
        <Title level={2} className="text-center mb-10">{t('home.aboutMe')}</Title>
        <div className="grid md:grid-cols-2 gap-10">
          <Paragraph className="text-gray-600 leading-relaxed text-lg">
            {t('home.aboutText')}
          </Paragraph>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3"><CalendarOutlined className="text-blue-500"/> <Text>17/06/2003</Text></div>
            <div className="flex items-center gap-3"><EnvironmentOutlined className="text-blue-500"/> <Text>Da Nang, Viet Nam</Text></div>
            <div className="flex items-center gap-3">
              <PhoneOutlined className="text-blue-500"/>
               <Text>0855 378 230</Text></div>
            <div className="flex items-center gap-3"><MailOutlined className="text-blue-500"/> <Text>nguyenluongthong1706@gmail.com</Text></div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section>
        <Title level={2} className="text-center mb-10">{t('home.skills')}</Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Soft Skills */}
          <Card title={t('home.softSkills')} className="shadow-sm border-none hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-2">
              {['Teamwork', 'Problem Solving', 'Critical Thinking', 'Time Management'].map(s => (
                <Tag color="blue" key={s} className="px-3 py-1 rounded-full">{s}</Tag>
              ))}
            </div>
          </Card>

          {/* Technologies */}
          <Card title={t('home.techs')} className="shadow-sm border-none hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'Laravel', 'React', 'NodeJS'].map(s => (
                <Tag color="green" key={s} className="px-3 py-1 rounded-full">{s}</Tag>
              ))}
            </div>
          </Card>

          {/* Tools */}
          <Card title={t('home.tools')} className="shadow-sm border-none hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'MySQL', 'Figma', 'Postman', 'Jira'].map(s => (
                <Tag color="orange" key={s} className="px-3 py-1 rounded-full">{s}</Tag>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
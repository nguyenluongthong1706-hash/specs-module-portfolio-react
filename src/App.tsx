import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <StyleProvider hashPriority='high'>
      <ConfigProvider theme={{
        token:{
          colorPrimary: '#1DA57A',
        }
      }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </StyleProvider>
  )
}

export default App

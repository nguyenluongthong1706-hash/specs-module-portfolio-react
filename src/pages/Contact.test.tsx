import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from '../pages/Contact'; // Đảm bảo đúng đường dẫn
import * as emailService from '../services/emailService';

// Mock i18next - Tránh việc nạp file ngôn ngữ thật làm chậm test
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock emailService
const sendMailSpy = vi.spyOn(emailService, 'sendContactEmail');

describe('Contact Component', () => {
  it('nên hiển thị đầy đủ các trường nhập liệu', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('contact.email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('contact.content')).toBeInTheDocument();
  });

  it('nên gọi service gửi mail khi dữ liệu hợp lệ', async () => {
    // Giả lập gửi mail thành công
    sendMailSpy.mockResolvedValue({ status: 200, text: 'OK' } as any);

    render(<Contact />);
    
    // Điền dữ liệu
    fireEvent.change(screen.getByPlaceholderText('contact.email'), {
      target: { value: 'test@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('contact.content'), {
      target: { value: 'Nội dung tin nhắn test' },
    });

    // Nhấn nút gửi
    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    // Kiểm tra service có được gọi không
    await waitFor(() => {
      expect(sendMailSpy).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        content: 'Nội dung tin nhắn test',
      });
    });
  });
});
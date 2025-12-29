// src/services/emailService.test.ts
import { describe, it, expect, vi } from 'vitest';
import { sendContactEmail } from './emailService';
import emailjs from '@emailjs/browser';

// Mock thư viện emailjs
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

describe('emailService', () => {
  it('nên gọi emailjs.send với đúng tham số', async () => {
    const mockData = { email: 'test@example.com', content: 'Hello' };
    (emailjs.send as any).mockResolvedValue({ status: 200, text: 'OK' });

    await sendContactEmail(mockData);

    expect(emailjs.send).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      { email: mockData.email, content: mockData.content },
      expect.any(String)
    );
  });
});
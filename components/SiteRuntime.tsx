import { useState, useEffect } from 'react';

export const SiteRuntime = () => {
  const [uptime, setUptime] = useState('');

  useEffect(() => {
    const startTime = new Date('01/15/2023 00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = now - startTime;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setUptime(`${days}天${hours}小时${minutes}分${seconds}秒`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <li><span className="l">网站运行：</span><span id="fanmatime">{uptime}</span></li>
  );
};
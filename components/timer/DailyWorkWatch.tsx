import React, { useEffect, useState } from 'react';
import {
  calculateTotalDurationInSeconds,
  formatDuration
} from '@/lib/utils/date';
import { useTimerContext } from '@/hooks/use-store-hooks';
import { fetchTodayTimeTracks } from '@/hooks/api-hooks';

const DailyWorkWatch = () => {
  const { time } = useTimerContext();
  const [totalDaily, setTotalDaily] = useState(0);
  const value = formatDuration(time + totalDaily);
  useEffect(() => {
    const getTimeTracks = async () => {
      const timeTracks = await fetchTodayTimeTracks();
      const totalDaily = calculateTotalDurationInSeconds(timeTracks);
      setTotalDaily(totalDaily);
    };

    getTimeTracks();
  }, []);
  return <div>{value}</div>;
};

export default DailyWorkWatch;

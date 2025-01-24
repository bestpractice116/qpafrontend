import React from 'react';
import { formatDuration } from '@/lib/utils/date';
import { useTimerContext } from '@/hooks/use-store-hooks';

const StopWatch = () => {
  const { time } = useTimerContext();
  const value = formatDuration(time);
  return <div>{value}</div>;
};

export default StopWatch;

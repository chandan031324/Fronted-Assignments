import React from 'react';
import ReactApexChart from 'react-apexcharts';

type TimeSeriesChartProps = {
  data: { x: string, y: number }[];
};

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const options = {
    chart: {
      type: 'line',
      zoom: { enabled: true },
    },
    xaxis: { type: 'datetime' },
    title: { text: 'Number of Visitors per Day' },
  };

  const series = [{ name: 'Visitors', data }];

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;

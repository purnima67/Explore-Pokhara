import React, { useEffect } from 'react';

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.id = 'weatherwidget-io-js';
    document.body.appendChild(script);
  }, []);

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/en/28d2484d00/pokhara/"
      data-label_1="POKHARA"
      data-label_2="WEATHER"
      data-theme="pure"
    >
      POKHARA WEATHER
    </a>
  );
};

export default WeatherWidget;
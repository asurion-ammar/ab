export const pageview = (url: string) => {
    window.dataLayer?.push({
      event: "pageview",
      page: url,
    });
  };
  
  export const gtmEvent = (eventName: string, eventData = {}) => {
    window.dataLayer?.push({
      event: eventName,
      ...eventData,
    });
  };
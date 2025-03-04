export const trackEvent = (eventName, params) => {
  window.dataLayer.push({
    event: "user_action",
    actionType: eventName,
    params,
  });
};

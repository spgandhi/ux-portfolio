import ReactGA from 'react-ga';

const analytics = {
  pageView: (pageName) => {
    ReactGA.pageview(`/${pageName}`);
  },

  event: (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label,
    })
  }
}

export default analytics;
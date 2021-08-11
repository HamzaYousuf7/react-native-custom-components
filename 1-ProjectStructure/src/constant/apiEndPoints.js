const _Environments = {
  development: {
    BASE_URL: `https://jsonplaceholder.typicode.com`,
    LOGIN: `/posts`,
  },
};

function getEnvironment() {
  const platform = 'development';
  return _Environments[platform];
}

const Environment = getEnvironment();
export default Environment;

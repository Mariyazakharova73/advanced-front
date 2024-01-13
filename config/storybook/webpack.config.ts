import path from 'path';
import type webpack from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  return config;
};

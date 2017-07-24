import http2 from 'webup-preset-http2';
import bundle from 'webup-preset-bundle';

export default ({dest}) => {
  const _http2 = http2(
    {
      dest: dest,
      element: true,
      prefix: 'build/element/http2'
    }
  )[0];

  const _bundle = bundle(
    {
      dest: dest,
      element: true,
      prefix: 'build/element/bundled'
    }
  )[0];

  _http2.element = true;
  _http2.serviceWorker = false;

  _bundle.element = true;
  _bundle.serviceWorker = false;

  // return an array or object as preset, each object is an build
  return [
    _http2,
    _bundle
  ];
}

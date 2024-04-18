import express from 'express'
import bodyParser from 'body-parser'
import merge from 'deepmerge'

interface MockRoute {
  [path: string]: (req: express.Request, res: express.Response) => any
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function registerMockRoutes() {
  const mockFiles = await import.meta.glob('./!(index).ts')
  const loadedMocks = await Promise.all(Object.entries(mockFiles).map(async ([_, loader]) => {
    const module = await loader();
    return (module as { default: MockRoute }).default;
  }));
  const mocks = loadedMocks.reduce((acc, mock) => ({ ...acc, ...mock }), {});

  Object.keys(mocks).forEach((path) => {
    app.all(path, (req, res) => {
      const result = mocks[path](req, res);
      res.json(merge({ code: 200 }, result));
    });
  });
}

registerMockRoutes().catch((err) => console.error('Failed to register mock routes:', err));

app.listen(5000, () => {
  console.log('Mock server is running at http://localhost:5000');
});
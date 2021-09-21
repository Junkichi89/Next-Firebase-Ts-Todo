## NextでTypeScriptを使おう


### Static Generation and Server-side Renderingの型定義
```
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}
```


API Routesの型定義

```
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // ...
}
```


## 公式ドキュメントのTS参照
https://nextjs.org/docs/basic-features/typescript

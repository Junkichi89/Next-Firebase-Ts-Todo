## NextでTypeScriptを使おう


作成方針

eslintやprettierなどは便利だが、カリキュラムとしては別の対応が必要になってしまうので、
一旦、なしで進めていこうと思う。


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

## 参考にしたサイトをまとめていく

- Nextのセットアップ方法
https://zenn.dev/a_da_chi/articles/181ea4ccc39580

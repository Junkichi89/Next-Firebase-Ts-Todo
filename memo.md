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

## chakra-uiの導入について

まずは公式に従って、packageをインストール
```
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

#### 公式ドキュメントのTS参照
https://nextjs.org/docs/basic-features/typescript

#### 参考にしたサイトをまとめていく

- Nextのセットアップ方法
https://zenn.dev/a_da_chi/articles/181ea4ccc39580

- Chakra UI ドキュメント
https://chakra-ui.com/docs/getting-started



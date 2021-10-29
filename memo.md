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

## コンポーネント化について

関数を親から子へ渡す方法で少し迷ったので、まとめておく。
基本的なpropsの使い方については、公式ドキュメントで理解。
親でコンポーネントをインポートして、 propsとして渡したい値を属性として
渡すことができる。
例えば、`<TodoList>`というコンポーネントを使ってtodoというpropsを渡したい場合は、
```
<TodoList todo={todo}>
```
このような形で渡すことができる。
todo=の部分はコンポーネント側で呼び出す際に使用する。
関数も同じである。
例えば、handleOnChangeという関数を子や祖先コンポーネントに渡したい場合、
```
<TodoList onChange={handleOnChange}>
```
上記のようにすることで呼び出すことが可能、祖先まで持って行きたい時は、
```
<TodoListItem onChange={onChange}>
```
とすることで親で定義した関数を使用することができる。

JSX内でuseStateを使用してしまうとコンポーネント化した時に切り分けることができなくなってしまうので注意が必要となる。


##コンポーネントに関して

一つ複雑で使い回しができるコンポーネントを作成してしまえば、
全体的にそれを使い回すことで効率化を図ることができる。
また、機能などもcrudを最低限作成しておけばそれを編集するだけで簡単に作れるので
最小限のcrud機能と様々なページで役に立つコンポーネントの実装が最優先でいいかもしれない。



#### 公式ドキュメントを参照（コンポーネントと props）
https://ja.reactjs.org/docs/components-and-props.html


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


## Formの実装について

Formilkを使用
Chakra-uiとの相性もよく、簡単に実装でき、また、yupを使うことでバリデーションも簡単に実装できてしまうので、なかなか便利


## ログイン後のページ遷移については

useRouterを使用して
ログインしたら任意のページに遷移するように設定

https://techblg.app/articles/how-to-transfer-to-different-page-without-link/
#### 公式ドキュメントのTS参照
https://nextjs.org/docs/basic-features/typescript

#### 参考にしたサイトをまとめていく

- Nextのセットアップ方法
https://zenn.dev/a_da_chi/articles/181ea4ccc39580

- Chakra UI ドキュメント
https://chakra-ui.com/docs/getting-started

- Formilk 公式ドキュメント

https://formik.org/docs/tutorial



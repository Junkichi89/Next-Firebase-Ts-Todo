// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Apiを使う場合のpropsはこれを参考にする　from 公式ドキュメント　　　https://nextjs.org/learn/excel/typescript/nextjs-types
// import { NextApiRequest, NextApiResponse } from 'next'

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   // ...
// }


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

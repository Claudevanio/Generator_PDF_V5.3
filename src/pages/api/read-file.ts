import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const dirRelativeToPublicFolder = 'assets'
    const filePath = path.resolve('./public', dirRelativeToPublicFolder, req.query.filename as string);
    res.setHeader('Content-Disposition', 'attachment; filename=' + req.query.filename);
    res.send(fs.createReadStream(filePath));
}
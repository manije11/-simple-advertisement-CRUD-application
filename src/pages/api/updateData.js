import db from "../../lib/db";
import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
        destination: "public/images", // مسیر پوشه‌ای که می‌خواهید تصاویر را ذخیره کنید
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
});

export default async function handler(req, res) {
    console.log(req.method, "here");
    return new Promise((resolve) => {
        if (req.method === "PUT") {
            const reqHandler = upload.single("image");
            reqHandler(req, res, async (err) => {
                console.log("there error", err);
                if (err) {
                    res.status(500).json({ error: err });
                    return resolve();
                }
                const { name, description, id } = req.body;

                const { file } = req;
                const fileName = file.filename;

                try {
                    const [result] = await db.query(
                        "UPDATE test2 SET name = ?, description = ?,image=? WHERE id = ?",
                        [name, description, fileName, id]
                    );
                    res.status(200).json({
                        message: "File uploaded successfully",
                        id: result.insertId,
                    });
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ error: "Failed to update data" });
                }
                resolve();
            });
        }
        else {
            res.setHeader("Allow", ["PUT"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            resolve();
        }
    });
}

export const config = {
    api: {
        bodyParser: false, // غیرفعال کردن body parser برای آپلود فایل
    },
};
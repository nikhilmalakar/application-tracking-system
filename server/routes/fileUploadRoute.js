import express from 'express';
import multer from 'multer';
const router = express.Router();

// router.get('/all-users', getUsers); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/resume/");
    },
    filename: function (req, file, cb) {
        const id = req.params.id;

        // Get the file extension
        const ext = file.originalname.split('.').pop();

        // Construct the filename as id.extension
        const filename = `${id}.${ext}`;

        // Call the callback with null for error and the constructed filename
        cb(null, filename);
    },
});

const upload = multer({ storage: storage });

// File upload route
router.post("/upload/resume/:id", upload.single("file"), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send(file);
});


export default router;
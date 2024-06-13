const express = require('express');
const { uploadPdf, getPdf, viewPdf, deletePdf } = require('../controllers/pdfController');
const { protect, admin } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');



const router = express.Router();

router.route('/')
    .post(protect, admin, (req,res,next) => {
        upload(req,res, (err) => {
            if(err) {
                return res.status(400).json({message: err.message})
            }
            next()
        })
    }, uploadPdf)
    .get(protect, admin, getPdf);


router.route('/:id' )
    .get(protect, admin, viewPdf)
    .delete(protect, admin, deletePdf);



// router.get('/view/:id', protect, async (req, res) => {
//     try {
//         const pdf = await Pdf.findById(req.params.id);
//         if (!pdf) {
//             return res.status(404).json({ message: 'PDF not found' });
//         }
//         res.sendFile(path.resolve(pdf.path));
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

module.exports = router
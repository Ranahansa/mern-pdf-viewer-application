const path = require('path');
const Pdf = require('../models/PdfModel');

const uploadPdf = async (req, res) => {
        if(!req.file){
            return res.status(400).json({message: 'Pdf not uploaded'});
        }

        const pdf = new Pdf({
            user: req.user._id,
            filename: req.file.filename,
            path: req.file.path
        })
        try{
            await pdf.save();
            return res.status(200).json({message: 'Pdf uploaded successfully'});
        } catch(err){
            return res.status(400).json({message: err.message});
        }
}

const getPdf = async (req, res) => {
    try{
        const pdfs = await Pdf.find({user: req.user._id});
        return res.status(200).json({pdfs});
    } catch(err){
        return res.status(400).json({message: err.message});
    }
}

const viewPdf = async (req, res) => {
    try{
        const pdf = await Pdf.findById(req.params.id);

        if(!pdf){
            return res.status(404).json({message: 'Pdf not found'});
        }

        res.sendFile(path.resolve(pdf.path))
    } catch(err){
        return res.status(400).json({message: err.message});
    }
}

const deletePdf = async (req, res) => {
    try{
        const pdf = await Pdf.findById(req.params.id);

        if (!pdf){
            return res.status(404).json({message: 'Pdf not found'});
        }
        fs.unlink(path.resolve(pdf.path), (err) =>{
            if(err){
                return res.status(400).json({message:  'Failed to delete the PDF file'});
            }
        })

        await pdf.remove();
        return res.status(200).json({message: 'Pdf deleted successfully'});

    } catch(err){
        return res.status(400).json({message: err.message});
    }
}

module.exports = {uploadPdf, getPdf, viewPdf, deletePdf};
// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact =  (req,res)=> {
    res.status(200).json({message:"Get all contacts"})
};

// @desc Get individual contacts
// @route GET /api/contacts
// @access public
const getIndividualContact =  (req,res)=> {
    res.status(200).json({message:`Get contact for ${req.params.id}`})
};

// @desc Create contacts
// @route GET /api/contacts
// @access public
const createContact = (req,res)=> {
    console.log("The request body",req.body);
    const {name,mail,mobile} = req.body;
    if(!name || !mail || !mobile){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:"Create Contact"})
};

// @desc Update contacts
// @route GET /api/contacts
// @access public
const updateContact = (req,res)=> {
    res.status(200).json({message:`Update out contact for ${req.params.id}`})
};

// @desc delete contacts
// @route GET /api/contacts
// @access public
const deleteContact =(req,res)=> {
    res.status(200).json({message:`Delete out contact for ${req.params.id}`})
} ;

module.exports = {getContact ,getIndividualContact, createContact ,updateContact ,deleteContact};
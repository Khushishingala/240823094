exports.index=(req,res)=>{
    res.send("Welcome to the ph.d students API!\n");
};

exports.show=(req,res)=>{
    res.send(`showing data for ID:${req.params.id}\n`);
};

exports.store=(req,res)=>{
    res.send(`data recived:${req.body.name},${req.body.city}\n`);
};

exports.update=(req,res)=>{
    res.send(
        `data updated for ID:${req.params.id},name:${req.body.name},city:${req.body.city}\n`
    );
};

exports.delete=(req,res)=>{
    res.send(`data deleted for TD:${req.params.id}\n`);
};
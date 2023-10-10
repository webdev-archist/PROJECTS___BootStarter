

export default function handler(req,res){
    const _ = oui()
    res.status(200).json({name: _})
    // res.status(200).json({name: "ok"})
}
const mid = function(req, res, next) {
    let available = req.headers.isFreeAppUser
    if(!available){
        res.send("Headers is required")
    }
    else
    {
        if(available === "true")
        req['isFreeAppUser'] = true
        if(available === "false")
        req['isFreeAppUser'] = false
        next()
    }
}
module.exports.mid = mid
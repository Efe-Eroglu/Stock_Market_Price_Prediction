const mongoose = require ("mongoose");

const Ann_Schema = mongoose.Schema(
    {
        id:{type:String, required:false},
        hisseAd:{type:String, required:false},
        model:{type:String, required:false},
        katman_sayisi:{type:[Number], required:false},
        epochs:{type:[Number], required:false},
        batch_size:{type:[Number], required:false},
        dogruluk_degeri:{type:[Number], required:false}
    },
    {
        timestamps:true
    }
);

const AnnSchema = mongoose.model("Ann",Ann_Schema);

module.exports = AnnSchema;



